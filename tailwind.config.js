/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#83A310',
      },
      fontSize: {
        14: '14px',
        20: '20px',
      },
      margin: {
        12: '12px',
      },
    },
  },
  plugins: [require('daisyui')],
};
