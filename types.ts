
export type Category = 'Música' | 'Cultura' | 'Cine' | 'Géneros' | 'Escena Nacional' | 'BYTEMOS';

export interface Release {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  spotifyUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: Category;
  imageUrl: string;
  date: string;
  author: string;
  featured?: boolean;
}

export interface AICreativeInsight {
  headline: string;
  analysis: string;
  recommendation: string;
  score: number;
}
