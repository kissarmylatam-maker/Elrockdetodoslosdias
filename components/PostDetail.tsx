
import React, { useEffect, useState } from 'react';
import { NewsItem, AICreativeInsight } from '../types';
import { getCreativeInsight } from '../services/geminiService';
import { NEWS, WEEKLY_PLAYLIST } from '../constants';

interface Props {
  item: NewsItem;
  onClose: () => void;
  onNavigateToPost: (item: NewsItem) => void;
}

const PostDetail: React.FC<Props> = ({ item, onClose, onNavigateToPost }) => {
  const [aiInsight, setAiInsight] = useState<AICreativeInsight | null>(null);
  const [loadingAI, setLoadingAI] = useState(true);

  const relatedPosts = NEWS
    .filter(n => n.id !== item.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  useEffect(() => {
    const fetchAI = async () => {
      setLoadingAI(true);
      const res = await getCreativeInsight(`Análisis crítico sobre: ${item.title}. Relaciónalo con la estética de fanzine y la cultura independiente de ${item.category}.`);
      setAiInsight(res);
      setLoadingAI(false);
    };
    fetchAI();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, [item]);

  const isByte = item.category === 'BYTEMOS';

  return (
    <div className={`fixed inset-0 z-[100] bg-black overflow-y-auto pt-20 pb-40 px-6 animate-in fade-in duration-500 ${isByte ? 'scanlines' : ''}`}>
      <style>{`
        .scanlines::after {
          content: " ";
          display: block;
          position: fixed;
          top: 0; left: 0; bottom: 0; right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          z-index: 101;
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
        }
      `}</style>
      
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[110] bg-red-600 text-white p-4 font-black mono hover:bg-white hover:text-black transition-colors shadow-[6px_6px_0px_#fff]"
      >
        CERRAR [X]
      </button>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-20">
        
        {/* Main Content Area */}
        <div className="flex-grow max-w-4xl">
          {/* Header Collage */}
          <div className="relative mb-16">
            <div className={`absolute -top-10 -left-10 px-6 py-2 font-black text-xl rotate-[-5deg] z-10 shadow-xl border-2 border-black ${isByte ? 'bg-[#00ff00] text-black' : 'bg-white text-black'}`}>
              #{item.category.toUpperCase()}
            </div>
            <div className={`border-8 border-white p-2 rotate-[1deg] bg-zinc-900 ${isByte ? 'border-[#00ff00]' : ''}`}>
              <img 
                src={item.imageUrl} 
                className={`w-full grayscale contrast-125 mix-blend-screen ${isByte ? 'hue-rotate-90 contrast-200' : ''}`}
                alt={item.title}
              />
            </div>
          </div>

          <h1 className={`text-6xl md:text-9xl font-syne font-black tracking-tighter leading-[0.8] mb-12 uppercase break-words inline-block p-4 shadow-[12px_12px_0px_#fff] ${isByte ? 'bg-zinc-900 !text-[#00ff00] border-4 border-[#00ff00]' : 'bg-red-600 text-white'}`}>
            {item.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-4 border-y-2 border-white/20 py-4 mb-8">
                <span className={`mono font-black uppercase text-xs ${isByte ? 'text-[#00ff00]' : 'text-red-600'}`}>Frecuencia de {item.author}</span>
                <span className="h-4 w-[1px] bg-white/20"></span>
                <span className="mono font-bold text-zinc-500 text-xs">{item.date}</span>
              </div>
              <p className={`text-2xl md:text-3xl font-bold mono leading-tight first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-3 ${isByte ? 'text-[#00ff00] first-letter:text-white' : 'text-zinc-300 first-letter:text-red-600'}`}>
                {item.content || item.excerpt}
              </p>
            </div>

            <div className="space-y-8">
              <div className={`text-black p-6 rotate-[2deg] shadow-2xl border-4 border-black ${isByte ? 'bg-[#00ff00]' : 'bg-white'}`}>
                <h3 className="font-syne font-black text-xl mb-4 border-b-4 border-black pb-2 italic uppercase">INTERFERENCIA IA</h3>
                {loadingAI ? (
                  <div className="space-y-2 animate-pulse">
                    <div className="h-4 bg-black/10 w-full"></div>
                    <div className="h-4 bg-black/10 w-5/6"></div>
                  </div>
                ) : (
                  <div className="space-y-4 mono text-sm font-bold uppercase leading-tight">
                    <p className={`underline font-black ${isByte ? 'text-black' : 'text-red-600'}`}>#{aiInsight?.headline}</p>
                    <p>"{aiInsight?.analysis}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Playlist de la Semana */}
        <aside className="w-full lg:w-80 shrink-0">
          <div className="sticky top-12 space-y-12">
            <div className="bg-zinc-900 border-4 border-white p-6 shadow-[10px_10px_0px_#dc2626]">
              <div className="flex items-center justify-between mb-8 border-b-2 border-white/20 pb-4">
                 <h3 className="text-xl font-syne font-black italic text-white uppercase leading-none">Playlist de la Semana</h3>
                 <span className="bg-red-600 text-white px-2 py-0.5 text-[10px] font-black mono animate-pulse uppercase">LIVE</span>
              </div>
              <div className="space-y-6">
                {WEEKLY_PLAYLIST.map((track, i) => (
                  <div key={track.id} className="flex gap-4 group cursor-pointer hover:translate-x-2 transition-transform">
                    <span className="text-2xl font-syne font-black text-zinc-700 group-hover:text-red-600 transition-colors">0{i+1}</span>
                    <div>
                      <h4 className="font-black uppercase text-xs text-white group-hover:text-red-600 truncate max-w-[180px]">{track.title}</h4>
                      <p className="mono text-[10px] text-zinc-500 uppercase">{track.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 bg-white text-black py-3 font-black mono text-[10px] uppercase hover:bg-red-600 hover:text-white transition-all shadow-[4px_4px_0px_#555]">
                Escuchar en Spotify
              </button>
            </div>

            <div className="p-6 border-4 border-dashed border-white/20 bg-black italic text-zinc-500 font-bold mono text-xs uppercase">
              "El silencio es solo ruido que no se atreve a ser escuchado."
            </div>
          </div>
        </aside>
      </div>

      {/* Suggested Section */}
      <div className="max-w-7xl mx-auto mt-32 pt-20 border-t-8 border-red-600">
         <h2 className="text-5xl font-syne font-black mb-12 italic tracking-tighter uppercase text-white">  MÁS RUIDO <span className="text-red-600">&gt;&gt;&gt;</span></h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {relatedPosts.map(post => (
             <div 
               key={post.id} 
               onClick={() => onNavigateToPost(post)}
               className={`group cursor-pointer bg-zinc-900 p-4 border-2 border-zinc-800 hover:border-white transition-all hover:-translate-y-2 ${post.category === 'BYTEMOS' ? 'hover:border-[#00ff00]' : ''}`}
             >
               <div className="aspect-video overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all">
                 <img src={post.imageUrl} className="w-full h-full object-cover" alt={post.title} />
               </div>
               <span className={`text-[10px] font-black mono uppercase mb-2 block ${post.category === 'BYTEMOS' ? 'text-[#00ff00]' : 'text-red-600'}`}>{post.category}</span>
               <h4 className={`text-lg font-syne font-black uppercase leading-none transition-colors ${post.category === 'BYTEMOS' ? 'group-hover:text-[#00ff00]' : 'group-hover:text-red-600'}`}>{post.title}</h4>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
};

export default PostDetail;
