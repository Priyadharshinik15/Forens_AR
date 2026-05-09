import DashboardLayout from "../components/layout/DashboardLayout";

import KnowledgeGraphCanvas from "../components/graph/KnowledgeGraphCanvas";

function KnowledgeGraph() {
  return (
    <DashboardLayout>
      
      {/* PAGE HEADER */}
      <div className="mb-8">
        
        <h1 className="text-4xl font-bold text-white">
          Knowledge Graph Intelligence
        </h1>

        <p className="text-gray-400 mt-3">
          AI-powered forensic relationship and evidence correlation system
        </p>
      </div>

      {/* MAIN GRAPH */}
      <KnowledgeGraphCanvas />

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        
        {/* CARD 1 */}
        <div
          className="
            bg-[#0b1120]
            border border-cyan-900/20
            rounded-3xl
            p-6
          "
        >
          
          <h2 className="text-xl font-bold text-white mb-4">
            Suspect Connections
          </h2>

          <p className="text-gray-400 text-sm leading-7">
            AI identified hidden relationships
            between suspect movement, mobile
            metadata, and CCTV timestamps.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="
            bg-[#0b1120]
            border border-cyan-900/20
            rounded-3xl
            p-6
          "
        >
          
          <h2 className="text-xl font-bold text-white mb-4">
            Timeline Correlation
          </h2>

          <p className="text-gray-400 text-sm leading-7">
            Evidence graph detected temporal
            inconsistencies across uploaded
            surveillance and digital evidence.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="
            bg-[#0b1120]
            border border-cyan-900/20
            rounded-3xl
            p-6
          "
        >
          
          <h2 className="text-xl font-bold text-white mb-4">
            AI Pattern Detection
          </h2>

          <p className="text-gray-400 text-sm leading-7">
            Graph intelligence engine discovered
            suspicious evidence clusters and
            abnormal forensic behavior patterns.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default KnowledgeGraph;