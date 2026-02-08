
import React from 'react';
import { Category, NewsItem } from '../types';
import ArticleCard from './ArticleCard';
import { NEWS } from '../constants';

interface Props {
  category: Category;
  onSelectPost: (post: NewsItem) => void;
  onBack: () => void;
}

const SectionArchive: React.FC<Props> = ({ category, onSelectPost, onBack }) => {
  const sectionNews = NEWS.filter(n => n.category === category);
  
  const sectionColors: Record<Category, string> = {
    'Música': 'bg-red-600',
    'Cultura': 'bg-blue-700',
    'Cine': 'bg-zinc-800',
    'Géneros': 'bg-purple-600',
    'Escena Nacional': 'bg-emerald-600',
    'BYTEMOS': 'bg-[#00ff00] text-black'
  };

  const isBytemos = category === 'BYTEMOS';

  return (
    <div className={`min-h-screen bg-[#0d0d0d] animate-in fade-in slide-in-from-right-10 duration-500 ${isBytemos ? 'crt-bg' : ''}`}>
      <style>{`
        .crt-bg::before {
          content: " ";
          display: block;
          position: fixed;
          top: 0; left: 0; bottom: 0; right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          z-index: 2;
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
        }
      `}</style>
      
      {/* Header de Sección */}
      <header className={`relative py-32 px-6 overflow-hidden transition-colors duration-700 ${sectionColors[category] || 'bg-zinc-900'}`}>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className={`mb-8 mono text-xs font-black uppercase tracking-widest hover:underline flex items-center gap-2 ${isBytemos ? 'text-black' : 'text-white'}`}
          >
            ← VOLVER AL INICIO
          </button>
          
          <h1 className={`text-7xl md:text-[12rem] font-syne font-black tracking-tighter leading-[0.8] uppercase italic break-words ${isBytemos ? 'text-black glitch-hover' : 'text-white'}`}>
            {category}<span className="opacity-30">.</span>
          </h1>
          
          <div className="mt-12 flex items-center gap-6">
            <span className={`px-4 py-1 mono font-black text-sm ${isBytemos ? 'bg-black text-[#00ff00]' : 'bg-white text-black'}`}>ARCHIVO HISTÓRICO</span>
            <span className={`h-[2px] w-24 ${isBytemos ? 'bg-black/30' : 'bg-white/30'}`}></span>
            <p className={`mono text-xs uppercase font-bold max-w-sm ${isBytemos ? 'text-black/80' : 'opacity-80'}`}>
              {isBytemos 
                ? 'INSERT COIN. Una base de datos poligonal sobre la cultura de los bits y el ruido digital.'
                : `Explorando las profundidades de ${category}. Un registro acumulado de visiones, sonidos y disrupciones.`
              }
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={`absolute -bottom-10 -right-10 text-[20rem] font-syne font-black select-none ${isBytemos ? 'text-black/5' : 'text-black/10'}`}>
          {category.charAt(0)}
        </div>
      </header>

      {/* Grid de Contenido */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="flex items-center justify-between mb-16 border-b-2 border-white/10 pb-6">
          <h3 className="mono text-sm font-black uppercase text-zinc-500">Total de Entradas: {sectionNews.length}</h3>
          <div className="flex gap-4">
             <span className={`w-3 h-3 rounded-full animate-pulse ${isBytemos ? 'bg-[#00ff00]' : 'bg-red-600'}`}></span>
             <span className="mono text-[10px] uppercase font-bold">Actualizado hoy</span>
          </div>
        </div>

        {sectionNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
            {sectionNews.map(item => (
              <ArticleCard key={item.id} item={item} onClick={onSelectPost} />
            ))}
          </div>
        ) : (
          <div className="py-40 text-center border-4 border-dashed border-white/10">
             <p className="mono text-xl font-bold uppercase opacity-30">No hay registros adicionales en esta frecuencia...</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default SectionArchive;
