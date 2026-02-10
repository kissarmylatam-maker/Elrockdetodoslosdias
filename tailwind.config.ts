import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts
  },
  theme: {
    extend: {
      colors: {
        rock: {
          dark: '#0d0d0d',
          light: '#eeeeee',
          red: '#dc2626',
          blue: '#2563eb',
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
} satisfies Config
