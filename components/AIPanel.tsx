
import React, { useState, useEffect } from 'react';
import { getCreativeInsight } from '../services/geminiService';
import { AICreativeInsight } from '../types';

const AIPanel: React.FC = () => {
  const [insight, setInsight] = useState<AICreativeInsight | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchInsight = async () => {
    setLoading(true);
    const data = await getCreativeInsight("la intersección entre música electrónica y arte generativo esta semana");
    setInsight(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsight();
  }, []);

  return (
    <div className="bg-red-600 text-white p-10 md:p-16 relative overflow-hidden my-16 shadow-[20px_20px_0px_#fff] border-4 border-black">
      {/* Decorative Stamp */}
      <div className="absolute -top-6 -right-6 rotate-12 opacity-30 pointer-events-none hidden md:block">
         <div className="border-[10px] border-white p-6 text-8xl font-black font-syne italic">CRÍTICA</div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative z-10">
        <div className="bg-black text-white px-4 py-1 font-black text-sm mono uppercase tracking-widest border-2 border-white">
          RESEÑA DE LA SEMANA // VOL. 042
        </div>
        <div className="flex items-center gap-4">
           <span className="mono text-xs font-black uppercase opacity-60">Status:</span>
           <span className="bg-white text-red-600 px-4 py-1 font-black mono text-xl shadow-[4px_4px_0px_#000]">
             {loading ? '--' : `${insight?.score}/10`}
           </span>
        </div>
      </div>
      
      {loading ? (
        <div className="animate-pulse space-y-6">
          <div className="h-20 bg-white/20 rounded w-3/4"></div>
          <div className="h-10 bg-white/20 rounded w-full"></div>
          <div className="h-10 bg-white/20 rounded w-1/2"></div>
        </div>
      ) : (
        <div className="space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-syne font-black italic leading-[0.8] tracking-tighter uppercase max-w-4xl">
              {insight?.headline}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             <p className="text-xl md:text-3xl font-bold mono leading-tight border-l-8 border-black pl-8 bg-white/10 p-6 shadow-xl">
               "{insight?.analysis}"
             </p>
             <div className="space-y-6">
                <div className="bg-black p-6 border-2 border-white shadow-[8px_8px_0px_#fff] rotate-[1deg]">
                   <h4 className="text-xs font-black uppercase mono text-red-500 mb-2">Veredicto Editorial:</h4>
                   <p className="text-lg font-black uppercase leading-none">{insight?.recommendation}</p>
                </div>
                <button 
                  onClick={fetchInsight}
                  className="w-full py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_#000] active:translate-y-1 active:shadow-none"
                >
                  Generar Nueva Crítica
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIPanel;
