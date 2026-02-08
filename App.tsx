
import React, { useState } from 'react';
import { NEWS, RELEASES } from './constants';
import { Category, NewsItem } from './types';
import NewReleasesBar from './components/NewReleasesBar';
import ArticleCard from './components/ArticleCard';
import AIPanel from './components/AIPanel';
import PostDetail from './components/PostDetail';
import HeroCarousel from './components/HeroCarousel';
import SubmissionModal from './components/SubmissionModal';
import FriendsBar from './components/FriendsBar';
import InfoPages from './components/InfoPages';
import SectionArchive from './components/SectionArchive';

type View = 'home' | 'about' | 'contact' | 'terms' | 'section';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedPost, setSelectedPost] = useState<NewsItem | null>(null);
  const [submissionType, setSubmissionType] = useState<'estreno' | 'entrevista' | null>(null);

  const featuredItems = NEWS.filter(n => n.featured).slice(0, 3);
  const latestNews = NEWS.filter(n => !n.featured).slice(0, 6);

  const categories: Category[] = ['Música', 'Escena Nacional', 'BYTEMOS', 'Cultura', 'Cine'];

  const handleNavigateToPost = (post: NewsItem) => {
    setSelectedPost(null);
    setTimeout(() => setSelectedPost(post), 10);
  };

  const handleCategoryClick = (cat: Category) => {
    setActiveCategory(cat);
    setCurrentView('section');
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <>
      <NewReleasesBar />
      <main className="max-w-7xl mx-auto px-6 pt-16">
        <section className="mb-24">
          <HeroCarousel items={featuredItems} onSelect={setSelectedPost} />
        </section>

        <section className="mb-24 border-y-2 border-white/5 py-12">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <h2 className="text-4xl font-syne font-black italic">EL PULSO <span className="text-red-600">AHORA</span></h2>
              <div className="flex flex-wrap gap-4">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`bg-zinc-900 border border-zinc-700 px-4 py-1 mono text-[10px] font-black uppercase hover:bg-white hover:text-black transition-all ${cat === 'BYTEMOS' ? 'hover:!text-[#00ff00] hover:!bg-black border-dashed' : ''}`}
                  >
                    Ver {cat}
                  </button>
                ))}
              </div>
           </div>
        </section>

        <section className="mb-24">
          <AIPanel />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {latestNews.map(item => (
            <ArticleCard key={item.id} item={item} onClick={setSelectedPost} />
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 bg-white text-black relative overflow-hidden group border-[10px] border-black shadow-[30px_30px_0px_#dc2626]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-200 -rotate-45 translate-x-48 -translate-y-48 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-block bg-black text-white px-4 py-1 mono font-black text-xs uppercase mb-4 rotate-[-2deg]">
                Radar de Bandas Independientes
              </div>
              <h2 className="text-6xl md:text-8xl font-syne font-black mb-8 tracking-tighter uppercase leading-[0.8] italic">
                Manda tu <br/><span className="text-red-600">Ruido.</span>
              </h2>
              <p className="max-w-xl text-xl md:text-2xl font-bold mono mb-12 leading-tight uppercase border-l-8 border-black pl-6">
                ¿Tu banda está haciendo algo diferente? Buscamos el próximo grito del under.
              </p>
              <div className="flex flex-wrap gap-6">
                <button onClick={() => setSubmissionType('estreno')} className="px-8 py-4 bg-black text-white font-black uppercase tracking-[0.2em] hover:bg-red-600 transition-all shadow-[6px_6px_0px_#ccc]">
                  Mandar Estreno
                </button>
                <button onClick={() => setSubmissionType('entrevista')} className="px-8 py-4 border-4 border-black text-black font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_#ccc]">
                  Solicitar Entrevista
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FriendsBar />
    </>
  );

  return (
    <div className="min-h-screen bg-[#0d0d0d] pb-24 selection:bg-red-600 selection:text-white">
      <nav className="sticky top-0 z-50 bg-[#0d0d0d] border-b-2 border-white px-6 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <h1 
            onClick={() => { setCurrentView('home'); setActiveCategory(null); }}
            className="text-3xl font-syne font-black tracking-tighter italic glitch-hover cursor-pointer"
          >
            MUSAIC<span className="text-red-600">.</span>
          </h1>
          <div className="hidden lg:flex space-x-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all mono ${
                  activeCategory === cat && currentView === 'section' ? 'text-red-600 underline decoration-4 underline-offset-8' : 'text-zinc-500 hover:text-white'
                } ${cat === 'BYTEMOS' ? 'hover:text-[#00ff00]' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => { setCurrentView('home'); setActiveCategory(null); }}
            className="hidden md:block bg-white text-black text-[10px] font-black px-4 py-2 uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all border-2 border-black"
          >
            Terminal
          </button>
        </div>
      </nav>

      {currentView === 'home' && renderHome()}
      {currentView === 'section' && activeCategory && (
        <SectionArchive 
          category={activeCategory} 
          onSelectPost={setSelectedPost} 
          onBack={() => setCurrentView('home')} 
        />
      )}
      
      {currentView === 'about' && <InfoPages type="about" onClose={() => setCurrentView('home')} />}
      {currentView === 'contact' && <InfoPages type="contact" onClose={() => setCurrentView('home')} />}
      {currentView === 'terms' && <InfoPages type="terms" onClose={() => setCurrentView('home')} />}

      {selectedPost && (
        <PostDetail 
          item={selectedPost} 
          onClose={() => setSelectedPost(null)} 
          onNavigateToPost={handleNavigateToPost}
        />
      )}

      {submissionType && (
        <SubmissionModal 
          type={submissionType} 
          onClose={() => setSubmissionType(null)} 
        />
      )}

      <footer className="mt-40 bg-black py-24 px-6 border-t-8 border-red-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-2 space-y-8">
             <h2 className="text-5xl font-syne font-black tracking-tighter italic">MUSAIC.</h2>
             <p className="text-zinc-500 max-w-sm mono text-sm leading-relaxed uppercase font-bold">
               Un diario ruidoso para mentes distorsionadas. Música, Cultura y Cine filtrados a través del lente de la subcultura independiente.
             </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600 mono">Fanzine</h4>
            <ul className="space-y-3 text-zinc-400 font-bold mono uppercase text-xs">
              <li onClick={() => setCurrentView('about')} className="hover:text-white cursor-pointer hover:translate-x-2 transition-transform">Quiénes Somos</li>
              <li onClick={() => setCurrentView('contact')} className="hover:text-white cursor-pointer hover:translate-x-2 transition-transform">Contacto</li>
              <li onClick={() => setCurrentView('terms')} className="hover:text-white cursor-pointer hover:translate-x-2 transition-transform">Términos</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600 mono">Categorías</h4>
            <ul className="space-y-3 text-zinc-400 font-bold mono uppercase text-xs">
              {categories.map(cat => (
                <li key={cat} onClick={() => handleCategoryClick(cat)} className="hover:text-white cursor-pointer hover:translate-x-2 transition-transform">
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
