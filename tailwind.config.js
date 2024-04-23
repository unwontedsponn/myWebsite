/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gopher-mono-semi': ["'Gopher Mono Semi'", 'monospace'],
        'gopher-mono': ["'Gopher Mono'", 'monospace'],
        'gopher-mono-bold': ["'Gopher Mono Bold'", 'monospace'],
      },
      minWidth: {
        '2xs': '17rem',
      },
      maxWidth: {
        '2xs': '17rem',
      },
      fontSize: {
        '2xs': ['0.60rem', '0.8rem'], // Font size and Line height
        '10xl': '10rem', // Not yet used
        '11xl': '11rem', 
        '12xl': '12rem', // Not yet used
      },
      letterSpacing: {
        mediumphomepage: '0.27rem', // or '0.017em' to be closer to how Tailwind defines these values
        largep: '0.18rem',
        smallphomepage: '0.082rem',
      },
      colors: {
        'thick-border-gray': '#3f423e',
        hoverPink: '#e39ba6',
        'custom-border-color': 'rgba(172, 221, 251, 0.4)',
      },
      borderWidth: {
        '3': '3px', // Adds a 'border-3' utility
      },
      scrollSnapType: {
        y: 'y mandatory',
      },
      textDecorationThickness: {
        '3': '3px',
        '5': '5px',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme  }) {
      addUtilities({
        '.scroll-snap-y': {
          scrollSnapType: 'y mandatory',
        },// Custom utility for text decoration color
        '.text-decoration-custom': {
          textDecorationColor: theme('colors.custom', '#c15564'), // Fallback to #c15564 if not found in theme
        },
      });
    },
  ],
};