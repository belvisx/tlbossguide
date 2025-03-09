'use client';

import { useState } from "react";
import { bosses } from "@/lib/bosses";
import { Info } from 'lucide-react';


interface Boss {
  name: string;
  strategy: {
    phases: { phase: string; details: string[] }[];
    tips?: string[];
  };
  drops?: { drop: string; item: string }[];
}

export function PhaseSidebar({ bossName }: { bossName: string }) {
  const boss = bosses.find((b) => b.name.toLowerCase() === bossName.toLowerCase());


  const [activeTab, setActiveTab] = useState<"phases" | "tips" | "drops">("phases");
  const [selectedPhase, setSelectedPhase] = useState(boss?.strategy.phases[0] || null);
  const [selectedTip, setSelectedTip] = useState(boss?.strategy.tips ? boss.strategy.tips[0] : null);
  const [selectedDrop, setSelectedDrop] = useState(boss?.drops ? boss.drops[0] : null);

  if (!boss) {
    return <h1 className="text-center text-2xl font-bold mt-10">Boss não encontrado</h1>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 px-2">
      

      <aside className="lg:w-1/4 w-full bg-[#171717] text-white p-4 rounded-lg shadow-lg">
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setActiveTab("phases")}
            className={`flex-1 p-2 rounded-lg ${activeTab === "phases" ? "bg-[#962D2D]" : "hover:bg-[#6C3232]"}`}
          >
            Mechanics
          </button>
          <button
            onClick={() => setActiveTab("tips")}
            className={`flex-1 p-2 rounded-lg ${activeTab === "tips" ? "bg-[#962D2D]" : "hover:bg-[#6C3232]"}`}
          >
            Tips
          </button>
          <button
            onClick={() => setActiveTab("drops")}
            className={`flex-1 p-2 rounded-lg ${activeTab === "drops" ? "bg-[#962D2D]" : "hover:bg-[#6C3232]"}`}
          >
            Drops
          </button>
        </div>
        {activeTab === "phases" ? (
          <ul className="space-y-2">
            {boss.strategy.phases.map((phase, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedPhase(phase)}
                  className={`w-full text-left p-2 rounded-lg ${selectedPhase?.phase === phase.phase ? "bg-[#962D2D]" : "hover:bg-[#6C3232]"}`}
                >
                  {phase.phase}
                </button>
              </li>
            ))}
          </ul>
        ) : activeTab === "tips" ? (
          <ul className="space-y-2">
            {boss.strategy.tips?.map((tip, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedTip(tip)}
                  className={`w-full text-left p-2 rounded-lg ${selectedTip === tip ? "bg-[#962D2D]" : "hover:bg-[#6C3232]"}`}
                >
                  {`#${index + 1}`}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="space-y-2">
            {boss.drops?.map((drop, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedDrop(drop)}
                  className={`w-full text-left p-2 rounded-lg ${selectedDrop?.drop === drop.drop ? "bg-[#962D2D]" : "hover:bg-[#6C3232]"}`}
                >
                  {drop.drop}
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>

      <section className="lg:w-3/4 w-full bg-[#171717] p-6 rounded-lg shadow-lg">
        {activeTab === "phases" ? (
          selectedPhase ? (
            <>
              <div className="flex flex-col justify-center items-center h-full">
              <h2 className="text-2xl font-bold mb-2 text-[#962D2D] text-center">{selectedPhase.phase}</h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                {selectedPhase.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              </div>
            </>
          ) : (
            <p className="text-lg">Select a mechanic</p>
          )
        ) : activeTab === "tips" ? (
          selectedTip ? (
            <>
              <div className="flex flex-col justify-center items-center h-full">
                <h2 className="mb-2 flex justify-center text-[#962D2D]"><Info /></h2>
                <p className="text-lg">{selectedTip}</p>
              </div>
            </>
          ) : (
            <p className="text-lg">Select a tip</p>
          )
        ) : (
          selectedDrop ? (
            <div className="flex flex-col items-center justify-center h-full">
              <img src={selectedDrop.item} alt={selectedDrop.drop} className="w-32 h-32 object-contain mb-4" />
              <h2 className="text-2xl font-bold mb-2">{selectedDrop.drop}</h2>
            </div>
          ) : (
            <p className="text-lg">Select a drop</p>
          )
        )}
      </section>
    </div>
  );
}
