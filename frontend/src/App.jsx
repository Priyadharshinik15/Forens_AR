import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Cases from "./pages/Cases";
import CaseDetails from "./pages/CaseDetails";
import EvidenceVault from "./pages/EvidenceVault";

import CCTVAnalysis from "./pages/CCTVAnalysis";
import CrimeScene3D from "./pages/CrimeScene3D";
import AIAgent from "./pages/AIAgent";
import Reports from "./pages/Reports";

import Login from "./pages/Login";
import Register from "./pages/Register";
import VoiceAnalysis from "./pages/VoiceAnalysis";
function App() {
  return (
    <Routes>
 <Route element={<Layout />}></Route>
      {/* ROOT → DASHBOARD */}
      <Route path="/" element={<Dashboard />} />

      {/* LOGIN */}
      <Route path="/login" element={<Login />} />

      {/* REGISTER */}
      <Route path="/register" element={<Register />} />

      {/* DASHBOARD (optional explicit route) */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* CASES */}
      <Route path="/cases" element={<Cases />} />

      {/* CASE DETAILS */}
      <Route path="/cases/:id" element={<CaseDetails />} />

      {/* EVIDENCE */}
      <Route path="/evidence" element={<EvidenceVault />} />

      {/* CCTV ANALYSIS */}
      <Route path="/cctv-analysis" element={<CCTVAnalysis />} />

      {/* CRIME SCENE 3D */}
      <Route path="/crime-scene-3d" element={<CrimeScene3D />} />

      {/* AI AGENT */}
      <Route path="/ai-agent" element={<AIAgent />} />

      {/* REPORTS */}
      <Route path="/reports" element={<Reports />} />
      <Route
  path="/voice-analysis"
  element={<VoiceAnalysis />}
/>
      {/* FALLBACK → redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;