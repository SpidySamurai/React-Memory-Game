/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-700%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(+700%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',opacity: 1 },
          '50%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0,0,1,1)' ,opacity: .9 },
        },
    
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out forwards',
        bounce: 'slideUp 1s 1,bounce 2s infinite linear ',
      },
    },
  },
  plugins: [],
}