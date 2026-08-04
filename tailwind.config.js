/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        // Naranja CSZ — color primario (igual que gasfitería)
        cszorange: {
          DEFAULT: '#F47820',
          deep:    '#CC5F0A',
          soft:    '#FDE8D4',
          mist:    '#FFF5EC',
        },
        // Rojo CSZ — protagonista en esta web (invertido vs gasfitería)
        cszred: {
          DEFAULT: '#E31B23',
          deep:    '#B71C1C',
          soft:    '#FFEBEE',
          mist:    '#FDF2F4',
        },
        // Amarillo CSZ — acento terciario
        cszyellow: {
          DEFAULT: '#FFC107',
          deep:    '#EAB308',
          soft:    '#FEF3C7',
          mist:    '#FFFDF2',
        },
        // Oscuros
        ink: {
          DEFAULT: '#0d0d0d',
          mid:     '#1C1C1C',
        },
        muted: {
          DEFAULT: '#6B7280',
        },
        paper: {
          DEFAULT: '#F8F8F8',
        },
      },
      fontFamily: {
        // Mantenemos para encabezados (coherencia logo)
        heading: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        // NUEVA tipografía secundaria — Outfit (geométrica moderna)
        body:    ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'red':  '0 18px 50px -22px rgba(227,27,35,.4)',
        'red-sm': '0 8px 24px -14px rgba(227,27,35,.3)',
        'orange': '0 18px 50px -22px rgba(244,120,32,.4)',
      },
    },
  },
  plugins: [],
}
