
import React from 'react';
import { FRIENDS } from '../constants';

const FriendsBar: React.FC = () => {
  return (
    <section className="py-12 border-y-2 border-white/10 bg-zinc-900/30 overflow-hidden group">
      <div className="flex items-center space-x-4 px-6 mb-8">
        <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-500 mono flex items-center">
          <span className="w-10 h-[1px] bg-zinc-700 mr-4"></span>
          Socios del Ruido / Aliados
        </h3>
      </div>
      
      <div className="flex animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
        {[...FRIENDS, ...FRIENDS, ...FRIENDS].map((friend, i) => (
          <div 
            key={i} 
            className="inline-flex items-center px-12 opacity-40 hover:opacity-100 transition-opacity cursor-default filter grayscale hover:grayscale-0"
          >
            <span className="text-3xl font-syne font-black tracking-tighter mr-2">{friend.logo}</span>
            <span className="mono font-bold text-sm uppercase">{friend.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default FriendsBar;
