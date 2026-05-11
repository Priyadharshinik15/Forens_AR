import {
  MapPin,
  CalendarDays,
  AlertTriangle,
  Eye,
  Sparkles,
} from "lucide-react";

function CaseCard({
  caseData = {},
  onView = () => {},
}) {
  if (!caseData || Object.keys(caseData).length === 0) {
    return null;
  }

  // ✅ HARD CODED STATS
  const stats = {
    totalCases: 3,
    seriousCases: 1,
    activeAgents: 4,
  };

  const statusStyles = {
    Critical: {
      bg: "bg-red-900/8",
      border: "border-red-900/10",
      text: "text-red-800",
      glow: "shadow-[0_0_40px_rgba(127,29,29,0.08)]",
    },
    Active: {
      bg: "bg-amber-500/8",
      border: "border-amber-500/10",
      text: "text-amber-700",
      glow: "shadow-[0_0_30px_rgba(217,119,6,0.06)]",
    },
    Resolved: {
      bg: "bg-emerald-500/8",
      border: "border-emerald-500/10",
      text: "text-emerald-700",
      glow: "shadow-[0_0_30px_rgba(16,185,129,0.06)]",
    },
  };

  const currentStyle =
    statusStyles[caseData.status] || statusStyles.Active;

  return (
    <div className="
      group relative overflow-hidden

      bg-white/35 backdrop-blur-2xl

      border border-black/5

      rounded-[34px]

      p-6

      shadow-[0_20px_80px_rgba(15,23,42,0.08)]

      hover:shadow-[0_25px_90px_rgba(15,23,42,0.14)]

      hover:scale-[1.015]

      transition-all duration-700
    ">

      {/* AMBIENT LIGHT */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/20 blur-3xl opacity-70 pointer-events-none" />

      {/* TEXTURE */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[length:22px_22px]" />

      {/* RED STRING */}
      <div className="absolute top-[110px] left-[120px] w-[130px] h-[2px] bg-gradient-to-r from-red-900 via-red-600 to-red-900 rotate-[12deg] shadow-[0_0_12px_rgba(127,29,29,0.45)] animate-pulse opacity-60 pointer-events-none" />

      <div className="absolute top-[102px] left-[112px] w-3 h-3 rounded-full bg-red-900 shadow-[0_0_16px_rgba(127,29,29,0.65)] animate-ping opacity-70 pointer-events-none" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-6">

          <div>

            {/* CASE BADGE */}
            <div className="flex items-center gap-3 mb-3">
              <div className="px-3 py-1.5 rounded-full bg-red-900/5 border border-red-900/10 text-red-800 text-[10px] tracking-[2px] font-bold flex items-center gap-2">
                <Sparkles size={10} />
                LIVE CASE
              </div>
            </div>

            <p className="text-xs tracking-[3px] text-slate-500 mb-2">
              {caseData.caseId}
            </p>

            <h2 className="text-2xl font-black text-slate-900">
              {caseData.title}
            </h2>

            <p className="text-slate-500 text-sm mt-2">
              Victim:
              <span className="ml-2 text-slate-700 font-medium">
                {caseData.victim}
              </span>
            </p>

            {/* ✅ STATS BLOCK */}
            <div className="flex gap-3 mt-4 text-xs text-slate-600">

              <div className="px-3 py-1 rounded-full bg-white/40 border border-black/5">
                Total: <b className="text-slate-900">{stats.totalCases}</b>
              </div>

              <div className="px-3 py-1 rounded-full bg-red-900/5 border border-red-900/10">
                Serious: <b className="text-red-800">{stats.seriousCases}</b>
              </div>

              <div className="px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                Agents: <b className="text-emerald-700">{stats.activeAgents}</b>
              </div>

            </div>

          </div>

          {/* STATUS */}
          <div className={`
            px-4 py-2 rounded-full border text-xs font-bold backdrop-blur-xl
            ${currentStyle.bg}
            ${currentStyle.border}
            ${currentStyle.text}
            ${currentStyle.glow}
          `}>
            {caseData.status}
          </div>

        </div>

        {/* DETAILS */}
        <div className="space-y-5 mb-8">

          <div className="flex items-center gap-4 text-slate-600 text-sm">
            <MapPin size={16} className="text-red-700" />
            {caseData.location}
          </div>

          <div className="flex items-center gap-4 text-slate-600 text-sm">
            <CalendarDays size={16} className="text-red-700" />
            {caseData.date}
          </div>

          <div className="flex items-center gap-4 text-slate-600 text-sm">
            <AlertTriangle size={16} className="text-red-700" />
            Risk Score:
            <span className="text-red-800 font-bold ml-2">
              {caseData.riskScore}%
            </span>
          </div>

        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between">

          <div className="flex-1 mr-5">
            <div className="w-full h-3 rounded-full bg-black/5 overflow-hidden border border-black/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-red-900 via-red-600 to-red-400"
                style={{ width: `${caseData.riskScore || 0}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => onView(caseData)}
            className="flex items-center gap-2 px-5 py-3 rounded-[20px] bg-red-900/5 border border-red-900/10 text-red-800 text-sm font-semibold hover:bg-red-900/10 hover:scale-[1.03] transition-all"
          >
            <Eye size={16} />
            View
          </button>

        </div>

      </div>
    </div>
  );
}

export default CaseCard;