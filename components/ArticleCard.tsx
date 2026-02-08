
import React from 'react';
import { NewsItem } from '../types';

interface Props {
  item: NewsItem;
  featured?: boolean;
  onClick?: (item: NewsItem) => void;
}

const SocialIcons = {
  Twitter: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  Facebook: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  ),
  LinkedIn: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg>
  )
};

const SocialShare: React.FC<{ title: string; colorClass?: string }> = ({ title, colorClass = "text-zinc-500 hover:text-white" }) => {
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(title);

  const handleShare = (e: React.MouseEvent, platform: string) => {
    e.stopPropagation();
    let url = '';
    switch (platform) {
      case 'twitter': url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`; break;
      case 'facebook': url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`; break;
      case 'linkedin': url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`; break;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={(e) => handleShare(e, 'twitter')} className={`${colorClass} transition-all hover:scale-125`} title="Compartir en X">
        <SocialIcons.Twitter />
      </button>
      <button onClick={(e) => handleShare(e, 'facebook')} className={`${colorClass} transition-all hover:scale-125`} title="Compartir en Facebook">
        <SocialIcons.Facebook />
      </button>
      <button onClick={(e) => handleShare(e, 'linkedin')} className={`${colorClass} transition-all hover:scale-125`} title="Compartir en LinkedIn">
        <SocialIcons.LinkedIn />
      </button>
    </div>
  );
};

const ArticleCard: React.FC<Props> = ({ item, featured, onClick }) => {
  const handleCardClick = () => {
    if (onClick) onClick(item);
  };

  if (featured) {
    return (
      <div 
        onClick={handleCardClick}
        className="col-span-1 lg:col-span-2 group cursor-pointer relative overflow-hidden h-[550px] border-4 border-white"
      >
        <img 
          src={item.imageUrl} 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-150 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          alt={item.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 space-y-6 w-full">
          <div className="flex justify-between items-end">
            <span className="stencil-tag text-sm">{item.category}</span>
            <div className="bg-black p-3 border border-white/20">
               <SocialShare title={item.title} colorClass="text-red-500 hover:text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-syne font-black leading-[0.9] text-white glitch-hover">
            {item.title}
          </h2>
          <p className="text-white text-xl max-w-xl font-bold bg-black inline-block p-2 border-l-4 border-red-600">
            {item.excerpt}
          </p>
          <div className="flex items-center space-x-4 pt-4 mono text-[10px] uppercase font-bold text-red-500">
            <span>Por {item.author}</span>
            <span className="w-4 h-[2px] bg-white"></span>
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleCardClick}
      className="group cursor-pointer flex flex-col space-y-4 border-b-2 border-white/10 pb-8 hover:border-red-600 transition-colors"
    >
      <div className="aspect-video overflow-hidden relative border-2 border-zinc-800 group-hover:border-white">
        <img 
          src={item.imageUrl} 
          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0" 
          alt={item.title}
        />
        <div className="absolute top-0 right-0 p-2">
           <span className="bg-white text-black text-[10px] font-black px-2 py-0.5 mono">{item.category}</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl font-syne font-black group-hover:text-red-600 transition-colors leading-none">
            {item.title}
          </h3>
          <div className="hidden group-hover:block transition-all">
             <SocialShare title={item.title} colorClass="text-zinc-400 hover:text-red-600" />
          </div>
        </div>
        <p className="text-zinc-400 text-sm line-clamp-2 mono font-medium">
          {item.excerpt}
        </p>
        <div className="flex items-center justify-between text-[10px] mono font-bold uppercase text-zinc-600">
          <span>{item.author}</span>
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
