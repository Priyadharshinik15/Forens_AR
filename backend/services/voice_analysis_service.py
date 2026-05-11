import os
import torch
import subprocess

from pydub import (
    AudioSegment
)

from transformers import (
    pipeline,
    AutoModelForSpeechSeq2Seq,
    AutoProcessor
)

# -----------------------------------
# CONVERT FILE TO WAV
# -----------------------------------

def convert_to_wav(
    input_file,
    output_wav="input.wav"
):

    ext = (
        input_file
        .split(".")[-1]
        .lower()
    )

    # -----------------------------------
    # MP4 → WAV
    # -----------------------------------

    if ext == "mp4":

        subprocess.run(
            [
                "ffmpeg",
                "-y",
                "-i",
                input_file,
                "-vn",
                "-acodec",
                "pcm_s16le",
                "-ar",
                "16000",
                "-ac",
                "1",
                output_wav
            ],
            check=True
        )

        return output_wav

    # -----------------------------------
    # MP3 → WAV
    # -----------------------------------

    elif ext == "mp3":

        audio = AudioSegment.from_mp3(
            input_file
        )

        audio.export(
            output_wav,
            format="wav"
        )

        return output_wav

    # -----------------------------------
    # WAV
    # -----------------------------------

    elif ext == "wav":

        return input_file

    # -----------------------------------
    # INVALID FORMAT
    # -----------------------------------

    else:

        raise ValueError(
            "Unsupported file format"
        )


# -----------------------------------
# LOAD WHISPER MODEL
# -----------------------------------

def load_asr():

    model_id = "openai/whisper-base"

    model = (
        AutoModelForSpeechSeq2Seq
        .from_pretrained(model_id)
    )

    processor = (
        AutoProcessor
        .from_pretrained(model_id)
    )

    return pipeline(
        "automatic-speech-recognition",

        model=model,

        tokenizer=processor.tokenizer,

        feature_extractor=
            processor.feature_extractor,

        device=
            0 if torch.cuda.is_available()
            else -1
    )


# -----------------------------------
# LOAD ASR PIPELINE
# -----------------------------------

asr = load_asr()


# -----------------------------------
# LOAD CLASSIFIER
# -----------------------------------

classifier = pipeline(
    "zero-shot-classification",

    model=
        "facebook/bart-large-mnli"
)


# -----------------------------------
# PROCESS AUDIO / VIDEO
# -----------------------------------

def process_file(file_path):

    # -----------------------------------
    # CONVERT FILE
    # -----------------------------------

    wav = convert_to_wav(file_path)

    # -----------------------------------
    # TRANSCRIBE
    # -----------------------------------

    result = asr(
        wav,
        chunk_length_s=30
    )

    print(result)

    text = result.get(
        "text",
        ""
    )

    # -----------------------------------
    # LABELS
    # -----------------------------------

    labels = [

        "panic",

        "distress",

        "violence",

        "domestic abuse",

        "medical emergency",

        "threat",

        "fear",

        "accident",

        "normal conversation",

        "criminal activity"
    ]

    # -----------------------------------
    # CLASSIFICATION
    # -----------------------------------

    result = classifier(
        text,
        labels
    )

    top_label = (
        result["labels"][0]
    )

    top_score = (
        result["scores"][0]
    )

    # -----------------------------------
    # RISK LEVEL
    # -----------------------------------

    risk_level = "LOW"

    if top_score > 0.85:

        risk_level = "HIGH"

    elif top_score > 0.65:

        risk_level = "MEDIUM"

    # -----------------------------------
    # AI OBSERVATION
    # -----------------------------------

    observation = ""

    if top_label in [
        "panic",
        "fear",
        "distress"
    ]:

        observation = (
            "Subject voice indicates psychological distress."
        )

    elif top_label in [
        "violence",
        "criminal activity",
        "threat"
    ]:

        observation = (
            "Possible violent or criminal activity detected."
        )

    elif top_label == "medical emergency":

        observation = (
            "Potential medical emergency identified."
        )

    else:

        observation = (
            "No immediate forensic threat detected."
        )

    # -----------------------------------
    # FINAL RESPONSE
    # -----------------------------------

    return {

        "text": text,

        "label": top_label,

        "score": float(top_score),

        "risk_level": risk_level,

        "observation": observation,

        "emergency":

            top_label in [

                "panic",

                "violence",

                "medical emergency",

                "criminal activity"
            ]

            and top_score > 0.6
    }