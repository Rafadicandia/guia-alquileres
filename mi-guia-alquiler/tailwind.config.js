/** @type {import('tailwindcss').Config} */
export default {
    // Rutas a todos los archivos que contendrán clases de Tailwind
    content: [
      "./index.html", // El HTML principal
      "./src/**/*.{js,ts,jsx,tsx}", // Todos los archivos JS/TS/JSX/TSX dentro de src
    ],
    // Aquí puedes extender el tema de Tailwind si lo necesitas
    theme: {
      extend: {},
    },
    // Aquí puedes añadir plugins de Tailwind si los usas
    plugins: [],
  }
  