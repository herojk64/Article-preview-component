/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
        'grayish-blue': 'hsl(212, 23%, 69%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },
      backgroundColor: {
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
        'grayish-blue': 'hsl(212, 23%, 69%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        body: '13px',
      },
      keyframes: {
        'slide-top': {
          '0%': { opacity: '0', transform: 'translateX(7.4rem) translateY(0)' },
          '100%': { opacity: '1', transform: 'translateX(7.4rem) translateY(-4rem)' },
        },
      },
      animation: {
        'slide-top': 'slide-top 0.5s ease-in-out both',
      },
    },
  },
  plugins: [],
}