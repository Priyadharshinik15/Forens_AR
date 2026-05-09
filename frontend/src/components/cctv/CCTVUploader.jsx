import { useRef, useState } from "react";
import {
  Upload,
  Video,
  FileVideo,
  CheckCircle2,
} from "lucide-react";

function CCTVUploader() {

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {

    if (!selectedFile) return;

    console.log(selectedFile);

    // API integration later
  };

  return (
    <div
      className="
        bg-[#0b1120]
        border border-cyan-900/20
        rounded-3xl
        p-7
      "
    >
      
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
        
        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-cyan-500/10
            border border-cyan-500/20
            flex
            items-center
            justify-center
          "
        >
          <Video
            size={28}
            className="text-cyan-400"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            CCTV Evidence Upload
          </h2>

          <p className="text-gray-400 mt-1">
            Upload surveillance footage for AI analysis
          </p>
        </div>
      </div>

      {/* UPLOAD AREA */}
      <div
        onClick={handleChooseFile}
        className="
          border-2
          border-dashed
          border-cyan-900/30
          hover:border-cyan-500/40
          rounded-3xl
          p-12
          bg-[#111827]
          transition-all duration-300
          cursor-pointer
          text-center
        "
      >
        
        <div
          className="
            w-20
            h-20
            mx-auto
            rounded-3xl
            bg-cyan-500/10
            border border-cyan-500/20
            flex
            items-center
            justify-center
            mb-6
          "
        >
          <Upload
            size={36}
            className="text-cyan-400"
          />
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">
          Drag & Drop CCTV Files
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          Supported formats: MP4, AVI, MOV
        </p>

        <button
          className="
            px-5 py-3
            rounded-2xl
            bg-cyan-400
            hover:bg-cyan-300
            text-black
            font-semibold
            transition-all duration-300
          "
        >
          Browse Files
        </button>

        <input
          type="file"
          accept=".mp4,.avi,.mov"
          ref={fileInputRef}
          onChange={handleFileChange}
          hidden
        />
      </div>

      {/* SELECTED FILE */}
      {selectedFile && (
        <div
          className="
            mt-8
            bg-[#111827]
            border border-cyan-900/20
            rounded-2xl
            p-5
            flex
            items-center
            justify-between
          "
        >
          
          <div className="flex items-center gap-4">
            
            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-cyan-500/10
                border border-cyan-500/20
                flex
                items-center
                justify-center
              "
            >
              <FileVideo
                size={22}
                className="text-cyan-400"
              />
            </div>

            <div>
              <h4 className="text-white font-medium">
                {selectedFile.name}
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>

          <CheckCircle2
            size={24}
            className="text-green-400"
          />
        </div>
      )}

      {/* FOOTER */}
      <div className="mt-8 flex justify-end">
        
        <button
          onClick={handleUpload}
          className="
            px-6 py-3
            rounded-2xl
            bg-cyan-400
            hover:bg-cyan-300
            text-black
            font-semibold
            transition-all duration-300
            shadow-[0_0_20px_rgba(34,211,238,0.3)]
          "
        >
          Start AI Analysis
        </button>
      </div>
    </div>
  );
}

export default CCTVUploader;