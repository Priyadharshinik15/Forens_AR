import DashboardLayout from "../components/layout/DashboardLayout";

import CCTVUploader from "../components/cctv/CCTVUploader";

import DetectionPanel from "../components/cctv/DetectionPanel";

import {
  Camera,
  Sparkles,
  ShieldAlert,
  ScanSearch,
} from "lucide-react";

function CCTVAnalysis({
  detections = [],
  insights = [],
}) {

  return (

    <DashboardLayout>

      {/* MAIN WRAPPER */}
      <div className="relative overflow-hidden">

        {/* PAPER TEXTURE */}
        <div
          className="
            absolute inset-0

            opacity-[0.02]

            pointer-events-none

            bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)]

            bg-[length:24px_24px]
          "
        />

        {/* AMBIENT LIGHTS */}
        <div
          className="
            absolute
            top-0
            left-0

            w-[500px]
            h-[500px]

            rounded-full

            bg-red-500/10

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

            bg-red-900/10

            blur-3xl

            animate-pulse
          "
        />

        <div className="relative z-10">

          {/* PAGE HEADER */}
          <div
            className="
              flex
              items-start
              justify-between

              gap-8

              mb-10
            "
          >

            {/* LEFT */}
            <div>

              {/* BADGE */}
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
                  text-[11px]
                  font-black

                  tracking-[2px]

                  mb-6
                "
              >

                <Sparkles size={12} />

                AI SURVEILLANCE ANALYSIS
              </div>

              {/* TOP */}
              <div className="flex items-center gap-5">

                {/* ICON */}
                <div
                  className="
                    relative

                    w-20
                    h-20

                    rounded-[30px]

                    bg-red-900/5

                    border border-red-900/10

                    flex
                    items-center
                    justify-center

                    shadow-[0_0_40px_rgba(127,29,29,0.12)]
                  "
                >

                  {/* GLOW */}
                  <div
                    className="
                      absolute
                      inset-0

                      rounded-[30px]

                      bg-red-500/10

                      blur-xl
                    "
                  />

                  <Camera
                    size={34}
                    className="
                      relative z-10

                      text-red-800
                    "
                  />
                </div>

                {/* TITLE */}
                <div>

                  <h1
                    className="
                      text-5xl
                      font-black

                      text-slate-900

                      tracking-tight
                    "
                  >
                    CCTV Analysis Center
                  </h1>

                  <p
                    className="
                      text-slate-500

                      mt-3

                      text-lg

                      leading-8

                      max-w-3xl
                    "
                  >
                    AI-powered surveillance footage
                    analysis, anomaly detection,
                    and forensic intelligence tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* STATUS */}
            <div
              className="
                inline-flex
                items-center
                gap-3

                px-6
                py-4

                rounded-[24px]

                bg-emerald-500/10

                border border-emerald-500/20

                text-emerald-700

                font-bold

                shadow-[0_10px_35px_rgba(16,185,129,0.08)]
              "
            >

              <div
                className="
                  w-2.5
                  h-2.5

                  rounded-full

                  bg-emerald-500

                  animate-pulse
                "
              />

              LIVE AI DETECTION ACTIVE
            </div>
          </div>

          {/* TOP INFO CARDS */}
          <div
            className="
              grid
              grid-cols-3

              gap-6

              mb-10
            "
          >

            {/* CARD */}
            <div
              className="
                relative
                overflow-hidden

                rounded-[32px]

                bg-white/30
                backdrop-blur-2xl

                border border-black/5

                p-6

                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
              "
            >

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

                <div className="flex items-center gap-3 mb-5">

                  <Camera
                    size={22}
                    className="text-red-700"
                  />

                  <p
                    className="
                      text-sm
                      font-bold

                      text-slate-500
                    "
                  >
                    DETECTIONS
                  </p>
                </div>

                <h2
                  className="
                    text-5xl
                    font-black

                    text-slate-900
                  "
                >
                  {detections.length}
                </h2>
              </div>
            </div>

            {/* ANOMALIES */}
            <div
              className="
                relative
                overflow-hidden

                rounded-[32px]

                bg-white/30
                backdrop-blur-2xl

                border border-black/5

                p-6

                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
              "
            >

              <div
                className="
                  absolute
                  top-0
                  right-0

                  w-32
                  h-32

                  rounded-full

                  bg-amber-500/10

                  blur-3xl
                "
              />

              <div className="relative z-10">

                <div className="flex items-center gap-3 mb-5">

                  <ShieldAlert
                    size={22}
                    className="text-amber-600"
                  />

                  <p
                    className="
                      text-sm
                      font-bold

                      text-slate-500
                    "
                  >
                    ANOMALIES
                  </p>
                </div>

                <h2
                  className="
                    text-5xl
                    font-black

                    text-slate-900
                  "
                >
                  {insights.length}
                </h2>
              </div>
            </div>

            {/* AI STATUS */}
            <div
              className="
                relative
                overflow-hidden

                rounded-[32px]

                bg-white/30
                backdrop-blur-2xl

                border border-black/5

                p-6

                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
              "
            >

              <div
                className="
                  absolute
                  top-0
                  right-0

                  w-32
                  h-32

                  rounded-full

                  bg-emerald-500/10

                  blur-3xl
                "
              />

              <div className="relative z-10">

                <div className="flex items-center gap-3 mb-5">

                  <ScanSearch
                    size={22}
                    className="text-emerald-600"
                  />

                  <p
                    className="
                      text-sm
                      font-bold

                      text-slate-500
                    "
                  >
                    AI ENGINE
                  </p>
                </div>

                <h2
                  className="
                    text-2xl
                    font-black

                    text-slate-900
                  "
                >
                  REAL-TIME
                </h2>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-12 gap-7">

            {/* LEFT */}
            <div className="col-span-5">

              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[40px]

                  bg-white/30
                  backdrop-blur-2xl

                  border border-black/5

                  p-2

                  shadow-[0_20px_80px_rgba(15,23,42,0.08)]
                "
              >

                {/* GLOW */}
                <div
                  className="
                    absolute
                    top-0
                    right-0

                    w-52
                    h-52

                    rounded-full

                    bg-red-500/10

                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  <CCTVUploader />

                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-7">

              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[40px]

                  bg-white/30
                  backdrop-blur-2xl

                  border border-black/5

                  p-2

                  shadow-[0_20px_80px_rgba(15,23,42,0.08)]
                "
              >

                {/* GLOW */}
                <div
                  className="
                    absolute
                    top-0
                    right-0

                    w-52
                    h-52

                    rounded-full

                    bg-red-500/10

                    blur-3xl
                  "
                />

                <div className="relative z-10">

                  <DetectionPanel
                    detections={detections}
                  />

                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          {insights.length > 0 && (

            <div
              className="
                relative
                overflow-hidden

                mt-10

                rounded-[40px]

                bg-white/30
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

                  <div className="flex items-center gap-4 mb-5">

                    <ShieldAlert
                      size={26}
                      className="text-red-700"
                    />

                    <h2
                      className="
                        text-4xl
                        font-black

                        text-slate-900
                      "
                    >
                      AI Surveillance Insights
                    </h2>
                  </div>

                  <p
                    className="
                      text-slate-500

                      text-lg

                      leading-8
                    "
                  >
                    Real-time forensic intelligence
                    generated from surveillance
                    analysis and anomaly detection.
                  </p>
                </div>

                {/* INSIGHT CARDS */}
                <div className="grid grid-cols-3 gap-6">

                  {insights.map(
                    (item, index) => (

                      <div
                        key={index}
                        className="
                          relative
                          overflow-hidden

                          rounded-[30px]

                          bg-white/40
                          backdrop-blur-xl

                          border border-black/5

                          p-7

                          transition-all duration-500

                          hover:-translate-y-1
                          hover:border-red-900/10
                        "
                      >

                        {/* MINI GLOW */}
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

                          <p
                            className="
                              text-slate-600

                              text-sm

                              leading-8
                            "
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )
                  )}

                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </DashboardLayout>
  );
}

export default CCTVAnalysis;