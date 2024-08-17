/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2dc653',
        secondary: '#208b3a',
        darkness: '#10451d',
        brightness: '#b7efc5',
        whitePrimary: '#f5f5f5',
        background: '#6ede8a',
      },
    },
  },
  plugins: [],
};
