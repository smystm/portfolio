/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}', 
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: [
      'text-transparent',
      'bg-clip-text',
      'bg-gradient-to-l',
      'from-indigo-500',
      'to-purple-500',
      'scale-x-100',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }