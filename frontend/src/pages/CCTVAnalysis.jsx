import React from "react";
import { Link, useLocation } from "react-router-dom";

import CCTVUploader from "../components/cctv/CCTVUploader";

import {
  LayoutDashboard,
  FolderOpen,
  Video,
  Box,
  Bot,
  FileText,
  LogOut,
} from "lucide-react";

function CCTVAnalysis() {

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (

    <div
      className="
        relative
        flex
        min-h-screen
        overflow-x-hidden

        bg-gradient-to-br
        from-[#f7f4ef]
        via-[#f2eee8]
        to-[#ebe5dc]

        text-slate-900
      "
    >

      {/* ================================= */}
      {/* CINEMATIC LIGHTING */}
      {/* ================================= */}

      <div
        className="
          absolute
          -top-32
          -left-32

          w-[800px]
          h-[800px]

          rounded-full

          bg-white/50

          blur-3xl

          opacity-90

          animate-pulse

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0

          w-[700px]
          h-[700px]

          rounded-full

          bg-red-200/20

          blur-3xl

          opacity-80

          animate-pulse

          pointer-events-none
        "
      />

      {/* ================================= */}
      {/* PAPER TEXTURE */}
      {/* ================================= */}

      <div
        className="
          absolute inset-0

          opacity-[0.025]

          pointer-events-none

          bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)]

          bg-[length:26px_26px]
        "
      />

      {/* ================================= */}
      {/* FLOATING DUST */}
      {/* ================================= */}

      <div className="absolute top-24 left-40 w-2 h-2 rounded-full bg-black/5 blur-[1px] animate-pulse" />

      <div className="absolute top-72 right-44 w-1 h-1 rounded-full bg-red-900/15 blur-[1px] animate-ping" />

      <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-black/5 blur-[1px] animate-bounce" />

      <div className="absolute bottom-20 right-1/4 w-1 h-1 rounded-full bg-red-800/20 blur-[1px] animate-pulse" />

      {/* ================================= */}
      {/* RED STRINGS */}
      {/* ================================= */}

      <div
        className="
          absolute
          top-[180px]
          left-[220px]

          w-[320px]
          h-[2px]

          bg-gradient-to-r
          from-red-950
          via-red-700
          to-red-950

          rotate-[11deg]

          shadow-[0_0_18px_rgba(127,29,29,0.55)]

          animate-pulse

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[320px]
          left-[500px]

          w-[260px]
          h-[2px]

          bg-gradient-to-r
          from-red-950
          via-red-600
          to-red-950

          -rotate-[14deg]

          shadow-[0_0_18px_rgba(127,29,29,0.55)]

          animate-pulse

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-[500px]
          left-[340px]

          w-[300px]
          h-[2px]

          bg-gradient-to-r
          from-red-950
          via-red-500
          to-red-950

          rotate-[7deg]

          shadow-[0_0_18px_rgba(127,29,29,0.55)]

          animate-pulse

          pointer-events-none
        "
      />

      {/* STRING NODES */}

      <div
        className="
          absolute
          top-[172px]
          left-[214px]

          w-4
          h-4

          rounded-full

          bg-red-900

          shadow-[0_0_20px_rgba(127,29,29,0.75)]

          animate-ping
        "
      />

      <div
        className="
          absolute
          top-[312px]
          left-[748px]

          w-4
          h-4

          rounded-full

          bg-red-800

          shadow-[0_0_20px_rgba(127,29,29,0.75)]

          animate-pulse
        "
      />

      <div
        className="
          absolute
          top-[492px]
          left-[628px]

          w-4
          h-4

          rounded-full

          bg-red-700

          shadow-[0_0_20px_rgba(127,29,29,0.75)]

          animate-ping
        "
      />

      {/* ================================= */}
      {/* SIDEBAR */}
      {/* ================================= */}

      <aside
        className="
          relative
          z-20

          hidden
          md:flex

          w-64

          flex-col

          bg-white/25
          backdrop-blur-2xl

          border-r border-black/5
        "
      >

        {/* LOGO */}

        <div className="p-6 border-b border-black/5">

          <div className="flex items-center gap-4">

            <div
              className="
                w-14
                h-14

                rounded-3xl

                bg-red-100

                flex
                items-center
                justify-center

                shadow-lg
              "
            >
              <Box
                className="text-red-900"
                size={26}
              />
            </div>

            <div>

              <h1
                className="
                  text-2xl
                  font-black
                  tracking-[0.15em]

                  text-slate-900
                "
              >
                NEXUS
              </h1>

              <p
                className="
                  text-xs
                  tracking-[0.3em]
                  uppercase

                  text-red-700
                "
              >
                TRACE SYSTEM
              </p>

            </div>

          </div>

        </div>

        {/* NAVIGATION */}

        <nav className="flex-1 p-4 space-y-2">

          {[
            ["/", "Dashboard", LayoutDashboard],
            ["/cases", "Cases", FolderOpen],
            ["/evidence", "Evidence Vault", Box],
            ["/cctv-analysis", "CCTV Analysis", Video],
            ["/crime-scene-3d", "Crime Scene 3D", Box],
            ["/ai-agent", "AI Agent", Bot],
            ["/reports", "Reports", FileText],
          ].map(([path, label, Icon]) => (

            <Link
              key={path}
              to={path}
              className={`
                group

                relative

                flex
                items-center
                gap-4

                overflow-hidden

                px-4
                py-3

                rounded-2xl

                transition-all
                duration-500

                ${
                  isActive(path)
                    ? `
                      bg-white/70

                      border border-white/40

                      shadow-lg

                      text-red-900
                    `
                    : `
                      text-slate-600

                      hover:bg-white/40

                      hover:text-slate-900
                    `
                }
              `}
            >

              {/* SHINE EFFECT */}

              <div
                className="
                  absolute
                  inset-0

                  translate-x-[-120%]

                  group-hover:translate-x-[120%]

                  transition-transform
                  duration-1000

                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent

                  skew-x-12
                "
              />

              <Icon size={20} className="relative z-10" />

              <span className="relative z-10 font-medium tracking-wide">
                {label}
              </span>

            </Link>

          ))}

        </nav>

        {/* FOOTER */}

        <div className="p-4 border-t border-black/5">

          <button
            className="
              group

              relative

              overflow-hidden

              flex
              items-center
              gap-3

              px-4
              py-3

              rounded-2xl

              text-slate-600

              hover:text-red-900
              hover:bg-white/40

              transition-all
              duration-500
            "
          >

            <div
              className="
                absolute
                inset-0

                translate-x-[-120%]

                group-hover:translate-x-[120%]

                transition-transform
                duration-1000

                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent

                skew-x-12
              "
            />

            <LogOut size={20} className="relative z-10" />

            <span className="relative z-10">
              Logout
            </span>

          </button>

        </div>

      </aside>

      {/* ================================= */}
      {/* MAIN */}
      {/* ================================= */}

      <main className="relative z-10 flex-1 flex flex-col">

        {/* HEADER */}

        <header
          className="
            relative

            overflow-hidden

            backdrop-blur-2xl

            border-b border-black/5

            bg-white/20

            px-10
            py-7
          "
        >

          {/* SHINE */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent

              translate-x-[-100%]

              animate-[shine_5s_linear_infinite]
            "
          />

          <div className="relative z-10">

            <h2
              className="
                text-5xl

                font-black

                tracking-[0.12em]

                uppercase

                text-slate-900

                drop-shadow-sm
              "
            >
              CCTV ANALYSIS
            </h2>

            <p
              className="
                mt-3

                text-sm

                tracking-[0.25em]

                uppercase

                text-red-700
              "
            >
              AI POWERED FORENSIC INVESTIGATION BOARD
            </p>

          </div>

        </header>

        {/* PAGE */}

        <div className="relative flex-1 overflow-y-auto px-8 pt-8 pb-40">

          <div
            className="
              absolute inset-0

              bg-gradient-to-br
              from-white/10
              via-transparent
              to-red-100/5

              pointer-events-none
            "
          />

          <div className="relative z-10">
            <CCTVUploader />
          </div>

        </div>

      </main>

      {/* ================================= */}
      {/* SHINE ANIMATION */}
      {/* ================================= */}

      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

    </div>
  );
}

export default CCTVAnalysis;