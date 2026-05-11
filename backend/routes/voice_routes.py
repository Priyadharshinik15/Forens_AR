import os

from flask import (
    Blueprint,
    request,
    jsonify
)

from services.voice_analysis_service import (
    process_file
)

voice_bp = Blueprint(
    "voice_bp",
    __name__
)

# -----------------------------------
# ANALYZE VOICE
# -----------------------------------

@voice_bp.route(
    "/analyze",
    methods=["POST"]
)
def analyze_voice():

    if "file" not in request.files:

        return jsonify({
            "error":
            "No file uploaded"
        }), 400

    file =request.files["file"]

    os.makedirs(
        "uploads",
        exist_ok=True
    )

    file_path =os.path.join("uploads",
            file.filename
        )

    file.save(file_path)

    result =process_file(file_path)

    return jsonify(result)