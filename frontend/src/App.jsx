import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Cases from "./pages/Cases";
import CaseDetails from "./pages/CaseDetails";
import EvidenceVault from "./pages/EvidenceVault";
import KnowledgeGraph from "./pages/KnowledgeGraph";
import CCTVAnalysis from "./pages/CCTVAnalysis";
import CrimeScene3D from "./pages/CrimeScene3D";
import AIAgent from "./pages/AIAgent";
import Reports from "./pages/Reports";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/auth/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <AuthProvider>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* DASHBOARD */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* CASES */}
        <Route
          path="/cases"
          element={
            <ProtectedRoute>
              <Cases />
            </ProtectedRoute>
          }
        />

        {/* CASE DETAILS */}
        <Route
          path="/cases/:id"
          element={
            <ProtectedRoute>
              <CaseDetails />
            </ProtectedRoute>
          }
        />

        {/* EVIDENCE */}
        <Route
          path="/evidence"
          element={
            <ProtectedRoute>
              <EvidenceVault />
            </ProtectedRoute>
          }
        />

        {/* KNOWLEDGE GRAPH */}
        <Route
          path="/knowledge-graph"
          element={
            <ProtectedRoute>
              <KnowledgeGraph />
            </ProtectedRoute>
          }
        />

        {/* CCTV */}
        <Route
          path="/cctv-analysis"
          element={
            <ProtectedRoute>
              <CCTVAnalysis />
            </ProtectedRoute>
          }
        />

        {/* CRIME SCENE */}
        <Route
          path="/crime-scene-3d"
          element={
            <ProtectedRoute>
              <CrimeScene3D />
            </ProtectedRoute>
          }
        />

        {/* AI AGENT */}
        <Route
          path="/ai-agent"
          element={
            <ProtectedRoute>
              <AIAgent />
            </ProtectedRoute>
          }
        />

        {/* REPORTS */}
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />

      </Routes>

    </AuthProvider>
  );
}

export default App;