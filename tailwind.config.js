/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#F5F5F5",
        primario: "#222831",
        secundario: "#76ABAE",
        texto: "#31363F",
      },
    },
  },
  plugins: [],
}