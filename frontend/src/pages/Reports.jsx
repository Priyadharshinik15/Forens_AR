import { useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import GenerateReportButton from "../components/reports/GenerateReportButton";
import ReportCard from "../components/reports/ReportCard";

function Reports({
  reports = [],
  insights = [],
}) {

  const [loading, setLoading] = useState(false);

  const handleGenerateReport = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

    }, 2500);
  };

  return (
    <DashboardLayout>

      {/* PAGE HEADER */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Investigation Reports
        </h1>

        <p className="text-gray-400 mt-3">
          AI-generated forensic intelligence documentation
        </p>
      </div>

      {/* TOP SECTION */}
      <div className="grid grid-cols-12 gap-6 mb-10">

        {/* GENERATOR */}
        <div className="col-span-5">

          <GenerateReportButton
            loading={loading}
            onGenerate={handleGenerateReport}
          />
        </div>

        {/* INFO PANEL */}
        <div className="col-span-7">

          <div
            className="
              h-full
              bg-[#0b1120]
              border border-cyan-900/20
              rounded-3xl
              p-7
            "
          >

            {/* HEADER */}
            <div className="mb-8">

              <h2 className="text-2xl font-bold text-white">
                AI Documentation Engine
              </h2>

              <p className="text-gray-400 mt-2">
                Automated forensic reporting pipeline
              </p>
            </div>

            {/* GRID */}
            {insights.length > 0 && (
              <div className="grid grid-cols-2 gap-6">

                {insights.map((item, index) => (
                  <div
                    key={index}
                    className="
                      bg-[#111827]
                      border border-cyan-900/20
                      rounded-2xl
                      p-6
                    "
                  >

                    <h3 className="text-lg font-semibold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            )}
          </div>
        </div>
      </div>

      {/* REPORT GRID */}
      {reports.length > 0 && (
        <div>

          <div className="flex items-center justify-between mb-8">

            <div>
              <h2 className="text-3xl font-bold text-white">
                Generated Reports
              </h2>

              <p className="text-gray-400 mt-2">
                Recently generated forensic documents
              </p>
            </div>

            <button
              className="
                px-5 py-3
                rounded-2xl
                bg-cyan-400
                hover:bg-cyan-300
                text-black
                font-semibold
                transition-all duration-300
                shadow-[0_0_20px_rgba(34,211,238,0.3)]
              "
            >
              + Generate New
            </button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-6">

            {reports.map((report, index) => (
              <ReportCard
                key={index}
                reportData={report}
              />
            ))}

          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default Reports;import { useState } from "react";

import {
  Sparkles,
  FileText,
  ShieldAlert,
  BrainCircuit,
} from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";

import GenerateReportButton from "../components/reports/GenerateReportButton";
import ReportCard from "../components/reports/ReportCard";

function Reports({
  reports = [],
  insights = [],
}) {

  const [loading, setLoading] =
    useState(false);

  const handleGenerateReport = () => {

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

    }, 2500);
  };

  return (
    <DashboardLayout>

      {/* ================================= */}
      {/* MAIN WRAPPER */}
      {/* ================================= */}
      <div
        className="
          relative
          overflow-hidden

          min-h-screen

          rounded-[42px]

          bg-gradient-to-br
          from-[#f7f4ef]
          via-[#f3efe9]
          to-[#ece6dc]

          p-2
        "
      >

        {/* PAPER TEXTURE */}
        <div
          className="
            absolute inset-0

            opacity-[0.025]

            pointer-events-none

            bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)]

            bg-[length:26px_26px]
          "
        />

        {/* AMBIENT LIGHT */}
        <div
          className="
            absolute
            -top-24
            -left-24

            w-[620px]
            h-[620px]

            rounded-full

            bg-white/40

            blur-3xl

            animate-pulse
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0

            w-[500px]
            h-[500px]

            rounded-full

            bg-red-200/20

            blur-3xl

            animate-pulse
          "
        />

        {/* FLOATING PARTICLES */}
        <div className="absolute top-20 left-40 w-2 h-2 rounded-full bg-black/5 animate-pulse" />

        <div className="absolute top-72 right-44 w-1 h-1 rounded-full bg-red-900/15 animate-ping" />

        <div className="absolute bottom-24 left-1/3 w-2 h-2 rounded-full bg-black/5 animate-bounce" />

        {/* RED STRINGS */}
        <div
          className="
            absolute
            top-[240px]
            left-[340px]

            w-[260px]
            h-[2px]

            bg-gradient-to-r
            from-red-900
            via-red-600
            to-red-900

            rotate-[12deg]

            shadow-[0_0_14px_rgba(127,29,29,0.45)]

            animate-pulse
          "
        />

        <div
          className="
            absolute
            top-[360px]
            left-[520px]

            w-[220px]
            h-[2px]

            bg-gradient-to-r
            from-red-900
            via-red-500
            to-red-900

            -rotate-[18deg]

            shadow-[0_0_14px_rgba(127,29,29,0.45)]

            animate-pulse
          "
        />

        {/* NODES */}
        <div
          className="
            absolute
            top-[232px]
            left-[332px]

            w-4
            h-4

            rounded-full

            bg-red-900

            shadow-[0_0_18px_rgba(127,29,29,0.7)]

            animate-ping
          "
        />

        <div
          className="
            absolute
            top-[352px]
            left-[736px]

            w-4
            h-4

            rounded-full

            bg-red-800

            shadow-[0_0_18px_rgba(127,29,29,0.7)]

            animate-pulse
          "
        />

        {/* ================================= */}
        {/* CONTENT */}
        {/* ================================= */}
        <div className="relative z-10">

          {/* ================================= */}
          {/* HEADER */}
          {/* ================================= */}
          <div className="mb-12">

            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2

                px-5
                py-2.5

                rounded-full

                bg-red-900/5

                border border-red-900/10

                text-red-800
                text-xs
                font-black

                tracking-[3px]

                mb-6

                backdrop-blur-xl
              "
            >

              <Sparkles size={14} />

              AI DOCUMENTATION ENGINE
            </div>

            {/* TITLE */}
            <h1
              className="
                text-6xl
                font-black

                text-slate-900

                tracking-tight
              "
            >
              Investigation Reports
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                text-slate-600

                mt-5

                text-lg

                leading-9

                max-w-3xl
              "
            >
              AI-generated forensic intelligence
              documentation with automated evidence
              summaries, anomaly detection, timeline
              reconstruction, and investigation insights.
            </p>
          </div>

          {/* ================================= */}
          {/* TOP SECTION */}
          {/* ================================= */}
          <div className="grid grid-cols-12 gap-6 mb-12">

            {/* GENERATOR */}
            <div className="col-span-5">

              <div
                className="
                  rounded-[40px]

                  bg-white/35
                  backdrop-blur-2xl

                  border border-black/5

                  p-4

                  overflow-hidden

                  shadow-[0_20px_80px_rgba(15,23,42,0.08)]
                "
              >

                <GenerateReportButton
                  loading={loading}
                  onGenerate={handleGenerateReport}
                />
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="col-span-7">

              <div
                className="
                  relative
                  overflow-hidden

                  h-full

                  rounded-[40px]

                  bg-white/35
                  backdrop-blur-2xl

                  border border-black/5

                  p-8

                  shadow-[0_20px_80px_rgba(15,23,42,0.08)]
                "
              >

                {/* GLOW */}
                <div
                  className="
                    absolute
                    top-0
                    right-0

                    w-72
                    h-72

                    rounded-full

                    bg-red-500/10

                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  {/* HEADER */}
                  <div className="mb-10">

                    <div className="flex items-center gap-5 mb-5">

                      {/* ICON */}
                      <div
                        className="
                          w-16
                          h-16

                          rounded-[26px]

                          bg-red-900/5

                          border border-red-900/10

                          flex
                          items-center
                          justify-center
                        "
                      >

                        <BrainCircuit
                          size={30}
                          className="text-red-700"
                        />
                      </div>

                      {/* TEXT */}
                      <div>

                        <h2
                          className="
                            text-4xl
                            font-black

                            text-slate-900
                          "
                        >
                          AI Documentation Engine
                        </h2>

                        <p
                          className="
                            text-slate-500

                            mt-2
                          "
                        >
                          Automated forensic reporting pipeline
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* INSIGHTS */}
                  {insights.length > 0 && (

                    <div className="grid grid-cols-2 gap-6">

                      {insights.map((item, index) => (

                        <div
                          key={index}
                          className="
                            relative
                            overflow-hidden

                            rounded-[30px]

                            bg-white/40
                            backdrop-blur-xl

                            border border-black/5

                            p-6

                            transition-all duration-500

                            hover:-translate-y-1
                            hover:border-red-900/10
                          "
                        >

                          {/* LIGHT */}
                          <div
                            className="
                              absolute
                              top-0
                              right-0

                              w-32
                              h-32

                              rounded-full

                              bg-red-500/10

                              blur-3xl
                            "
                          />

                          <div className="relative z-10">

                            {/* ICON */}
                            <div
                              className="
                                w-14
                                h-14

                                rounded-[22px]

                                bg-red-900/5

                                border border-red-900/10

                                flex
                                items-center
                                justify-center

                                mb-5
                              "
                            >

                              <ShieldAlert
                                size={22}
                                className="text-red-700"
                              />
                            </div>

                            {/* TITLE */}
                            <h3
                              className="
                                text-xl
                                font-black

                                text-slate-900

                                mb-4
                              "
                            >
                              {item.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p
                              className="
                                text-sm

                                leading-8

                                text-slate-600
                              "
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ================================= */}
          {/* REPORTS */}
          {/* ================================= */}
          {reports.length > 0 && (

            <div>

              {/* HEADER */}
              <div
                className="
                  flex
                  items-start
                  justify-between

                  gap-8

                  mb-10
                "
              >

                <div>

                  <h2
                    className="
                      text-5xl
                      font-black

                      text-slate-900
                    "
                  >
                    Generated Reports
                  </h2>

                  <p
                    className="
                      text-slate-500

                      mt-4

                      text-lg
                    "
                  >
                    Recently generated forensic intelligence documents
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  className="
                    px-6
                    py-4

                    rounded-[24px]

                    bg-gradient-to-r
                    from-red-900
                    to-red-700

                    text-white

                    font-black

                    shadow-[0_10px_35px_rgba(127,29,29,0.2)]

                    transition-all duration-300

                    hover:scale-[1.03]
                  "
                >
                  + Generate New
                </button>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-2 gap-6">

                {reports.map((report, index) => (

                  <div
                    key={index}
                    className="
                      rounded-[40px]

                      bg-white/35
                      backdrop-blur-2xl

                      border border-black/5

                      p-4

                      overflow-hidden

                      shadow-[0_20px_80px_rgba(15,23,42,0.08)]
                    "
                  >

                    <ReportCard
                      reportData={report}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Reports;