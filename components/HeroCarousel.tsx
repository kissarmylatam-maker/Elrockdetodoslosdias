
import React, { useState, useEffect } from 'react';
import { NewsItem } from '../types';

interface Props {
  items: NewsItem[];
  onSelect: (item: NewsItem) => void;
}

const HeroCarousel: React.FC<Props> = ({ items, onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
      setIsTransitioning(false);
    }, 400);
  };

  const item = items[activeIndex];

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden group border-4 border-white cursor-pointer" onClick={() => onSelect(item)}>
      {/* Background with Transition */}
      <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-0 scale-110 blur-md' : 'opacity-100 scale-100 blur-0'}`}>
        <img 
          src={item.imageUrl} 
          className="w-full h-full object-cover grayscale contrast-150 brightness-50"
          alt={item.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className={`absolute inset-0 p-8 md:p-16 flex flex-col justify-end transition-all duration-500 delay-100 ${isTransitioning ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="flex flex-col space-y-6 max-w-5xl">
          <div className="flex items-center space-x-4">
             <span className="stencil-tag text-sm animate-pulse">{item.category}</span>
             <span className="bg-white text-black text-[10px] font-black px-2 py-0.5 mono">HISTORIA DESTACADA {activeIndex + 1}/{items.length}</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-syne font-black leading-[0.85] text-white glitch-hover uppercase tracking-tighter">
            {item.title}
          </h2>
          
          <p className="text-white text-xl md:text-2xl font-bold mono max-w-2xl bg-black/80 inline-block p-3 border-l-4 border-red-600">
            {item.excerpt}
          </p>

          <div className="flex items-center space-x-4 pt-4 mono text-[10px] uppercase font-bold text-red-500">
            <span className="bg-white text-black px-2">POR {item.author}</span>
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-white">{item.date}</span>
          </div>
        </div>
      </div>

      {/* Carousel Controls (Indicators) */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
        {items.map((_, idx) => (
          <button 
            key={idx}
            onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
            className={`w-12 h-2 transition-all ${idx === activeIndex ? 'bg-red-600 w-24' : 'bg-white/30 hover:bg-white'}`}
          />
        ))}
      </div>

      {/* Aesthetic Overlays */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </section>
  );
};

export default HeroCarousel;
