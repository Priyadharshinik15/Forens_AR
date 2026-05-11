import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import {
  TrendingUp,
  Sparkles,
} from "lucide-react";

function AnalyticsChart() {

  // ✅ HARDCODED DATA (3 CASES)
  const chartData = [
    { month: "Jan", cases: 1 },
    { month: "Feb", cases: 2 },
    { month: "Mar", cases: 3 },
  ];

  return (
    <div className="
      relative overflow-hidden

      rounded-[40px]

      bg-white/30 backdrop-blur-2xl

      border border-black/5

      shadow-[0_20px_80px_rgba(15,23,42,0.08)]

      p-8

      h-[460px]
    ">

      {/* PAPER TEXTURE */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[length:24px_24px]" />

      {/* RED AMBIENT LIGHT */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10 flex items-start justify-between mb-10">

        <div>

          <div className="
            inline-flex items-center gap-2 px-4 py-2
            rounded-full bg-red-900/5 border border-red-900/10
            text-red-800 text-[11px] font-black tracking-[2px] mb-5
          ">
            <Sparkles size={12} />
            FORENSIC ANALYTICS
          </div>

          <h2 className="text-3xl font-black text-slate-900">
            Case Analytics
          </h2>

          <p className="text-slate-500 mt-3">
            Monthly forensic investigation trends
          </p>
        </div>

        <div className="
          relative w-16 h-16 rounded-[24px]
          bg-red-900/5 border border-red-900/10
          flex items-center justify-center
        ">
          <TrendingUp size={28} className="text-red-800" />
        </div>

      </div>

      {/* CHART */}
      <div className="relative z-10 h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={chartData}>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="rgba(15,23,42,0.08)"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
              tick={{ fill: "#64748b", fontSize: 12, fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "#64748b", fontSize: 12, fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(127,29,29,0.08)",
                borderRadius: "24px",
                boxShadow: "0 10px 40px rgba(15,23,42,0.08)",
                fontWeight: 600,
              }}
              labelStyle={{
                color: "#7f1d1d",
                fontWeight: 700,
              }}
            />

            {/* GLOW LINE */}
            <Line
              type="monotone"
              dataKey="cases"
              stroke="rgba(127,29,29,0.18)"
              strokeWidth={10}
              dot={false}
            />

            {/* MAIN LINE */}
            <Line
              type="monotone"
              dataKey="cases"
              stroke="#991b1b"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#991b1b",
                strokeWidth: 3,
                stroke: "#fff",
              }}
              activeDot={{
                r: 8,
                fill: "#7f1d1d",
                stroke: "#fff",
                strokeWidth: 4,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default AnalyticsChart;