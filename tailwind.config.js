/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#131C5C',
        purple: '#3F2A8A',
        orange: '#F58A07',
      },
      boxShadow: {
        soft: '0 12px 40px -20px rgba(19, 28, 92, 0.35)',
      },
    },
  },
  plugins: [],
};
