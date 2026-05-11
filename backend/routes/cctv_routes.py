from flask import Blueprint, request, jsonify
import os
import time

cctv_bp = Blueprint('cctv_bp', __name__)

# Create a folder to store uploaded CCTV videos temporarily
UPLOAD_DIR = "uploads/cctv"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@cctv_bp.route("/analyze", methods=["POST"])
def analyze_cctv():
    # 1. Check if the file is in the request
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
        
    # 2. Validate file type
    if not file.filename.endswith(('.mp4', '.avi', '.mov')):
        return jsonify({"error": "Invalid file format. Please upload MP4, AVI, or MOV."}), 400

    # 3. Save the file
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    file.save(file_path)

    # ---------------------------------------------------------
    # TODO: Place your actual AI video processing logic here. 
    # (e.g., passing the file_path to OpenCV or a PyTorch model)
    # ---------------------------------------------------------
    
    # Simulate processing time for the frontend loader
    time.sleep(3) 

    # 4. Return the mock analysis data
    analysis_results = {
        "filename": file.filename,
        "status": "success",
        "events": [
            { "time": '10:01 PM', "timestamp": 15, "event": 'Person 1 sat on chair near the window' },
            { "time": '10:05 PM', "timestamp": 45, "event": 'Person 2 entered the room' },
            { "time": '10:06 PM', "timestamp": 60, "event": 'Person 1 stood up from chair' },
            { "time": '10:07 PM', "timestamp": 85, "event": 'Person 1 and Person 2 approached each other' },
            { "time": '10:10 PM', "timestamp": 120, "event": 'Person 1 exited the room' },
        ],
        "interactions": [
            { "persons": ['Person 1', 'Person 2'], "type": 'Conversation / Proximity interaction' }
        ],
        "suspicious_activity": 'Unusual rapid movement detected from Person 2 near the exit point at 10:08 PM.'
    }

    return jsonify(analysis_results), 200