import { Bell, Search, LogOut, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // remove fake login
    localStorage.removeItem("user");

    // redirect to login page
    navigate("/login");
  };

  return (
    <div className="relative flex items-center justify-between mb-8 px-6 py-5 rounded-[30px] bg-white/28 backdrop-blur-2xl border border-black/5 shadow-[0_20px_80px_rgba(15,23,42,0.05)] overflow-hidden">

      {/* LEFT */}
      <div className="relative z-10 flex items-center gap-5">

        <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/5 border border-red-900/10 text-red-800 text-xs font-bold tracking-[2px]">
          <Sparkles size={12} />
          LIVE AI ANALYSIS
        </div>

        <div className="flex items-center gap-3 bg-white/35 backdrop-blur-2xl border border-black/5 rounded-[22px] px-5 py-4 w-[420px]">
          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search evidence, cases, suspects..."
            className="bg-transparent outline-none text-slate-800 flex-1 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative z-10 flex items-center gap-4">

        <button className="relative w-14 h-14 rounded-[22px] bg-white/35 backdrop-blur-2xl border border-black/5 flex items-center justify-center text-slate-700">
          <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-red-700 animate-pulse" />
          <Bell size={18} />
        </button>

        <button
          onClick={handleLogout}
          className="relative overflow-hidden flex items-center gap-3 px-6 py-4 rounded-[22px] bg-red-900/5 backdrop-blur-2xl border border-red-900/10 text-red-800"
        >
          <LogOut size={18} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;