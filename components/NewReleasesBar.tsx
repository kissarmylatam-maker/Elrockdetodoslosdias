
import React from 'react';
import { RELEASES } from '../constants';

const SpotifyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.302c-.216.354-.673.466-1.026.25-2.848-1.74-6.433-2.133-10.654-1.168-.404.093-.812-.162-.904-.565-.093-.404.162-.812.565-.904 4.634-1.06 8.583-.614 11.77 1.334.352.215.465.673.249 1.026v.027zm1.468-3.258c-.272.443-.847.585-1.29.313-3.262-2.004-8.23-2.585-12.087-1.414-.502.152-1.03-.135-1.18-.636-.153-.502.134-1.03.636-1.18 4.41-1.338 9.89-.684 13.608 1.6 443.27.848.587 1.29.313h.013zm.127-3.39c-3.913-2.324-10.37-2.54-14.133-1.4c-.6.182-1.233-.163-1.415-.762-.182-.6.163-1.233.762-1.415 4.316-1.31 11.434-1.05 15.908 1.605.54.32.716 1.015.395 1.555-.32.54-1.015.716-1.555.395l-.162-.078z"/>
  </svg>
);

const NewReleasesBar: React.FC = () => {
  return (
    <div className="bg-[#111] border-b-4 border-red-600 py-6 overflow-hidden relative">
      <div className="flex items-center space-x-4 px-6 mb-4">
        <h3 className="text-xs font-black tracking-[0.3em] uppercase text-red-600 flex items-center mono">
          <span className="w-3 h-3 bg-red-600 mr-3"></span>
          Nuevos Decibelios
        </h3>
      </div>
      <div className="flex space-x-4 overflow-x-auto px-6 no-scrollbar pb-4">
        {RELEASES.map((release) => (
          <div key={release.id} className="flex-none w-28 group cursor-pointer">
            <div className="relative aspect-square overflow-hidden mb-2 bg-zinc-800 border-2 border-white/5 transition-all group-hover:border-red-600 group-hover:rotate-1">
              <img 
                src={release.coverUrl} 
                alt={release.title} 
                className="w-full h-full object-cover transition-all duration-300 grayscale group-hover:grayscale-0 contrast-125" 
              />
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href={release.spotifyUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-black p-4 text-white hover:bg-red-600 transition-colors shadow-[4px_4px_0px_#fff]"
                >
                  <SpotifyIcon />
                </a>
              </div>
            </div>
            <h4 className="font-black text-xs uppercase mono truncate group-hover:text-red-500">{release.title}</h4>
            <p className="text-[10px] text-zinc-500 uppercase tracking-tighter truncate">{release.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleasesBar;
