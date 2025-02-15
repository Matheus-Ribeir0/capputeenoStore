/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#F0F0F5', // Adicionando a cor personalizada
        secondGray: '#F3F5F6',
    },
    fontFamily: {
      'saira-stencil': ['Saira Stencil One', 'sans-serif'],
    },
  }
  },
  plugins: [],
}
