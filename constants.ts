
import { Release, NewsItem } from './types';

export const RELEASES: Release[] = [
  {
    id: '1',
    title: 'Eternal Sunshine',
    artist: 'Ariana Grande',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=400',
    spotifyUrl: '#'
  },
  {
    id: '2',
    title: 'Blue Lips',
    artist: 'Schoolboy Q',
    coverUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400',
    spotifyUrl: '#'
  },
  {
    id: '3',
    title: 'Everything I Thought It Was',
    artist: 'Justin Timberlake',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400',
    spotifyUrl: '#'
  },
  {
    id: '4',
    title: 'Las Mujeres Ya No Lloran',
    artist: 'Shakira',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400',
    spotifyUrl: '#'
  }
];

export const FRIENDS = [
  { name: 'Radio Kaos', logo: 'RK' },
  { name: 'Fanzine X', logo: 'FX' },
  { name: 'Underground Press', logo: 'UP' },
  { name: 'Sonic Labs', logo: 'SL' },
  { name: 'Riff Mag', logo: 'RM' },
  { name: 'Indie Soul', logo: 'IS' }
];

export const WEEKLY_PLAYLIST = [
  { title: 'Inhaler', artist: 'Your House', id: 'p1' },
  { title: 'The Voidz', artist: 'All the Same', id: 'p2' },
  { title: 'Fontaines D.C.', artist: 'Starburster', id: 'p3' },
  { title: 'Amyl and the Sniffers', artist: 'U Should Not Be Doing That', id: 'p4' },
  { title: 'IDLES', artist: 'Gift Horse', id: 'p5' }
];

export const NEWS: NewsItem[] = [
  {
    id: '101',
    title: 'El Renacimiento de los Paisajes Visuales',
    excerpt: 'Cómo los artistas contemporáneos están redefiniendo la relación entre la acústica y los visuales abstractos.',
    content: 'Estamos viviendo una era donde el sonido ya no basta. Los conciertos se han transformado en instalaciones de arte cinético. Artistas como Max Cooper o Ryoji Ikeda están empujando los límites de lo que el ojo puede procesar mientras el oído es bombardeado por frecuencias granulares. No es solo música, es una experiencia multisensorial que desafía la percepción misma de la realidad.',
    category: 'Cultura',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    date: '24 Oct, 2023',
    author: 'Elena Vance',
    featured: true
  },
  {
    id: '106',
    title: 'El Under Argentino: Más que una Moda',
    excerpt: 'Un recorrido por los sótanos de Buenos Aires donde el nuevo post-punk está gestando una revolución.',
    content: 'En los rincones oscuros de Almagro y Chacarita, el ruido está volviendo a su esencia. Bandas que rechazan el autotune y abrazan el feedback de amplificadores valvulares. Hay una urgencia en el aire, una necesidad de escupir verdades sobre ritmos motorik.',
    category: 'Escena Nacional',
    imageUrl: 'https://images.unsplash.com/photo-1514525253361-bee8d48700df?auto=format&fit=crop&q=80&w=800',
    date: '25 Oct, 2023',
    author: 'Franco Zurd',
    featured: true
  },
  {
    id: '108',
    title: 'Terror en 8-Bits: El fenómeno de lo Analógico',
    excerpt: '¿Por qué los gráficos de PS1 están aterrorizando a una nueva generación de gamers?',
    content: 'El horror indie ha encontrado su hogar en la nostalgia de lo poligonal. Juegos como los de Puppet Combo demuestran que la baja resolución permite que la imaginación rellene los huecos con miedos primarios. Es el regreso a lo táctil, a lo ruidoso, a lo que no se ve claramente pero se siente en la nuca.',
    category: 'BYTEMOS',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    date: '26 Oct, 2023',
    author: 'Gabi Byte',
    featured: true
  },
  {
    id: '102',
    title: 'Cine-Sónico: El Auge de las Bandas Sonoras',
    excerpt: 'Explorando por qué los compositores de cine recurren cada vez más a la síntesis ambiental.',
    content: 'El cine contemporáneo está abandonando las orquestas grandilocuentes por texturas de sintetizadores modulares. Desde el trabajo de Mica Levi hasta la distorsión de Trent Reznor.',
    category: 'Cine',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    date: '23 Oct, 2023',
    author: 'Mark Sterling'
  },
  {
    id: '109',
    title: 'Cyberpunk Local: Modding en el Tercer Mundo',
    excerpt: 'La cultura del modding en Latinoamérica como un acto de resistencia tecnológica.',
    content: 'Reparar consolas con piezas de desecho, traducir juegos de forma pirata y crear mundos que reflejan nuestras calles.',
    category: 'BYTEMOS',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    date: '27 Oct, 2023',
    author: 'Rafa Glitch'
  }
];
