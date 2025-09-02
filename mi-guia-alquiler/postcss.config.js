// Configuración para PostCSS, necesaria para que Tailwind funcione
export default {
    plugins: {
      '@tailwindcss/postcss': {}, // Habilita el plugin de Tailwind
      autoprefixer: {}, // Habilita autoprefixer para compatibilidad de navegadores
    },
  }
  