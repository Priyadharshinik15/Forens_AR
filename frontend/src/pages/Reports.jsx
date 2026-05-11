import {
  useState,
} from "react";

import axios from "axios";

import {
  Sparkles,
  FileText,
  BrainCircuit,
} from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";

import GenerateReportButton from "../components/reports/GenerateReportButton";

function Reports() {

  const [loading, setLoading] =
    useState(false);

  const [report, setReport] =
    useState("");

  const [uploadedFile, setUploadedFile] =
    useState(null);

  // -----------------------------------
  // FILE UPLOAD
  // -----------------------------------
  const handleFileUpload =
    async (e) => {

      const file =
        e.target.files[0];

      if (!file) return;

      setUploadedFile(file);

      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      try {

        await axios.post(
          "http://127.0.0.1:5000/api/ai/upload",
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      } catch (error) {

        console.log(error);
      }
    };

  // -----------------------------------
  // GENERATE REPORT
  // -----------------------------------
  const handleGenerateReport =
    async () => {

      setLoading(true);

      try {

        const response =
          await axios.post(
            "http://127.0.0.1:5000/api/ai/generate-report"
          );

        setReport(
          response.data.report
        );

      } catch (error) {

        console.log(error);

        setReport(
          "AI failed to generate report."
        );
      }

      setLoading(false);
    };

  return (
    <DashboardLayout>

      {/* -------------------------------- */}
      {/* HEADER */}
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

          <Sparkles size={12} />

          FORENSIC REPORT ENGINE
        </div>

        <h1
          className="
            text-5xl
            font-black

            text-slate-900
          "
        >
          Investigation Reports
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
          Upload forensic evidence and generate
          AI-powered investigation intelligence reports.
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

        {/* LIGHT */}
        <div
          className="
            absolute
            top-0
            right-0

            w-60
            h-60

            rounded-full

            bg-red-200/20

            blur-3xl
          "
        />

        {/* PAPER TEXTURE */}
        <div
          className="
            absolute inset-0

            opacity-[0.02]

            pointer-events-none

            bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)]

            bg-[length:22px_22px]
          "
        />

        {/* RED STRING */}
        <div
          className="
            absolute
            top-[180px]
            left-[320px]

            w-[260px]
            h-[2px]

            bg-gradient-to-r
            from-red-900
            via-red-600
            to-red-900

            rotate-[12deg]

            shadow-[0_0_14px_rgba(127,29,29,0.45)]

            animate-pulse

            opacity-60
          "
        />

        {/* NODE */}
        <div
          className="
            absolute
            top-[172px]
            left-[312px]

            w-4
            h-4

            rounded-full

            bg-red-900

            shadow-[0_0_18px_rgba(127,29,29,0.65)]

            animate-ping
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
                AI Summarizer Agent
              </h2>

              <p
                className="
                  text-slate-500
                  mt-3
                  leading-8
                  max-w-3xl
                "
              >
                Upload forensic evidence and generate
                AI-powered investigation intelligence reports.
              </p>
            </div>
          </div>

          {/* UPLOAD ZONE */}
          <label
            className="
              flex
              flex-col
              items-center
              justify-center

              h-[320px]

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

            <FileText
              size={54}
              className="text-red-800 mb-6"
            />

            <h3
              className="
                text-2xl
                font-bold

                text-slate-900
              "
            >
              Upload Investigation Evidence
            </h3>

            <p
              className="
                text-slate-500
                mt-3
              "
            >
              PDF / DOC / Autopsy / CCTV / Evidence Files
            </p>

            {uploadedFile && (

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
                {uploadedFile.name}
              </div>
            )}

            <input
              type="file"
              hidden
              onChange={handleFileUpload}
            />
          </label>

          {/* GENERATE BUTTON */}
          <div className="mt-8 flex justify-center">

            <GenerateReportButton
              loading={loading}
              onGenerate={
                handleGenerateReport
              }
            />
          </div>

          {/* REPORT AREA */}
          {(loading || report) && (

            <div className="mt-10">

              {/* LOADING */}
              {loading && (

                <div
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center

                    h-[300px]
                  "
                >

                  <div
                    className="
                      w-16
                      h-16

                      rounded-full

                      border-4
                      border-red-900/10
                      border-t-red-800

                      animate-spin

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
                    AI is analyzing evidence...
                  </h3>

                  <p
                    className="
                      text-slate-500
                      mt-3
                    "
                  >
                    Correlating forensic intelligence
                  </p>
                </div>
              )}

              {/* REPORT */}
              {report && !loading && (

                <div
                  className="
                    bg-white/30
                    backdrop-blur-xl

                    border border-black/5

                    rounded-[30px]

                    p-8

                    text-slate-700

                    leading-9

                    whitespace-pre-line
                  "
                >
                  {report}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Reports;