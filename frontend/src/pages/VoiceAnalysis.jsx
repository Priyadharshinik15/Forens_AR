import {
  useState,
} from "react";

import axios from "axios";

import {
  Mic,
  Upload,
  BrainCircuit,
  ShieldAlert,
} from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";

function VoiceAnalysis() {

  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  // -----------------------------------
  // FILE CHANGE
  // -----------------------------------

  const handleFileChange = (
    e
  ) => {

    setFile(
      e.target.files[0]
    );
  };

  // -----------------------------------
  // ANALYZE
  // -----------------------------------

  const handleAnalyze =
    async () => {

      if (!file) return;

      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      setLoading(true);

      try {

        const response =
          await axios.post(
            "http://127.0.0.1:5000/api/voice/analyze",
            formData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        setResult(
          response.data
        );

      } catch (error) {

        console.log(error);
      }

      setLoading(false);
    };

  return (
    <DashboardLayout>

      {/* -------------------------------- */}
      {/* PAGE HEADER */}
      {/* -------------------------------- */}

      <div className="mb-10">

        <div
          className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            bg-red-900/5
            border border-red-900/10

            text-red-800
            text-xs
            font-bold
            tracking-[2px]

            mb-5
          "
        >

          <Mic size={13} />

          VOICE FORENSIC ANALYSIS
        </div>

        <h1
          className="
            text-5xl
            font-black

            text-slate-900
          "
        >
          Victim Voice Intelligence
        </h1>

        <p
          className="
            text-slate-500

            mt-5

            text-lg
            leading-8

            max-w-3xl
          "
        >
          Upload victim voice recordings,
          emergency calls,
          or CCTV audio for AI-powered
          forensic emotion analysis.
        </p>
      </div>

      {/* -------------------------------- */}
      {/* MAIN CONTAINER */}
      {/* -------------------------------- */}

      <div
        className="
          relative
          overflow-hidden

          bg-white/35
          backdrop-blur-2xl

          border border-black/5

          rounded-[40px]

          p-8

          shadow-[0_20px_80px_rgba(15,23,42,0.08)]
        "
      >

        {/* RED STRING */}
        <div
          className="
            absolute
            top-[160px]
            left-[340px]

            w-[240px]
            h-[2px]

            bg-gradient-to-r
            from-red-900
            via-red-600
            to-red-900

            rotate-[10deg]

            opacity-60

            animate-pulse

            shadow-[0_0_12px_rgba(127,29,29,0.4)]
          "
        />

        {/* NODE */}
        <div
          className="
            absolute
            top-[152px]
            left-[332px]

            w-4
            h-4

            rounded-full

            bg-red-900

            animate-ping

            shadow-[0_0_20px_rgba(127,29,29,0.7)]
          "
        />

        <div className="relative z-10">

          {/* HEADER */}
          <div className="flex items-center gap-5 mb-10">

            <div
              className="
                w-20
                h-20

                rounded-[28px]

                bg-red-900/5
                border border-red-900/10

                flex
                items-center
                justify-center
              "
            >

              <BrainCircuit
                size={38}
                className="text-red-800"
              />
            </div>

            <div>

              <h2
                className="
                  text-4xl
                  font-black

                  text-slate-900
                "
              >
                AI Voice Analyzer
              </h2>

              <p
                className="
                  text-slate-500
                  mt-3
                  leading-8
                "
              >
                Whisper transcription +
                forensic emotional intelligence.
              </p>
            </div>
          </div>

          {/* -------------------------------- */}
          {/* UPLOAD ZONE */}
          {/* -------------------------------- */}

          <label
            className="
              flex
              flex-col
              items-center
              justify-center

              h-[300px]

              rounded-[36px]

              border-2
              border-dashed
              border-red-900/15

              bg-red-900/5

              cursor-pointer

              hover:bg-red-900/8

              transition-all duration-500
            "
          >

            <Upload
              size={54}
              className="
                text-red-800
                mb-6
              "
            />

            <h3
              className="
                text-2xl
                font-bold

                text-slate-900
              "
            >
              Upload Voice Evidence
            </h3>

            <p
              className="
                text-slate-500
                mt-3
              "
            >
              MP3 / WAV / MP4 files
            </p>

            {file && (

              <div
                className="
                  mt-6

                  px-5
                  py-3

                  rounded-full

                  bg-white/40

                  text-slate-700
                  font-medium
                "
              >
                {file.name}
              </div>
            )}

            <input
              type="file"
              hidden
              accept=".mp3,.wav,.mp4"
              onChange={
                handleFileChange
              }
            />
          </label>

          {/* -------------------------------- */}
          {/* ANALYZE BUTTON */}
          {/* -------------------------------- */}

          <div className="mt-8 flex justify-center">

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="
                px-10
                py-5

                rounded-[24px]

                bg-red-900
                hover:bg-red-800

                text-white
                font-semibold
                text-lg

                transition-all duration-300

                shadow-[0_10px_30px_rgba(127,29,29,0.35)]
              "
            >
              {loading
                ? "Analyzing..."
                : "Analyze Voice"}
            </button>
          </div>

          {/* -------------------------------- */}
          {/* RESULT */}
          {/* -------------------------------- */}

          {result && (

            <div
              className="
                mt-10

                bg-white/30
                backdrop-blur-xl

                border border-black/5

                rounded-[30px]

                p-8
              "
            >

              <div className="flex items-center gap-4 mb-8">

                <ShieldAlert
                  size={32}
                  className="text-red-800"
                />

                <h2
                  className="
                    text-3xl
                    font-black

                    text-slate-900
                  "
                >
                  AI Investigation Result
                </h2>
              </div>

              {/* TRANSCRIPTION */}
              <div className="mb-8">

                <h3
                  className="
                    text-xl
                    font-bold

                    text-slate-900

                    mb-4
                  "
                >
                  Transcription
                </h3>

                <div
                  className="
                    bg-white/40

                    rounded-[24px]

                    p-6

                    text-slate-700
                    leading-8
                  "
                >
                  {result.text}
                </div>
              </div>

              {/* ANALYSIS */}
              <div className="grid grid-cols-3 gap-6">

                <div
                  className="
                    bg-white/40

                    rounded-[24px]

                    p-6
                  "
                >

                  <p className="text-slate-500 mb-2">
                    Emotion
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-bold

                      text-slate-900
                    "
                  >
                    {result.label}
                  </h3>
                </div>

                <div
                  className="
                    bg-white/40

                    rounded-[24px]

                    p-6
                  "
                >

                  <p className="text-slate-500 mb-2">
                    Risk Level
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-bold

                      text-red-800
                    "
                  >
                    {result.risk_level}
                  </h3>
                </div>

                <div
                  className="
                    bg-white/40

                    rounded-[24px]

                    p-6
                  "
                >

                  <p className="text-slate-500 mb-2">
                    Confidence
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-bold

                      text-slate-900
                    "
                  >
                    {(
                      result.score * 100
                    ).toFixed(0)}%
                  </h3>
                </div>
              </div>

              {/* OBSERVATION */}
              <div
                className="
                  mt-8

                  bg-red-900/5
                  border border-red-900/10

                  rounded-[24px]

                  p-6
                "
              >

                <h3
                  className="
                    text-xl
                    font-bold

                    text-slate-900

                    mb-3
                  "
                >
                  AI Observation
                </h3>

                <p
                  className="
                    text-slate-700
                    leading-8
                  "
                >
                  {result.observation}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default VoiceAnalysis;