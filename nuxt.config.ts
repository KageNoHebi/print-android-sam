export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "static"
  },
  app: {
    baseURL: "/",
  },
  css: ["~/assets/css/tailwind.css"],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined // pastikan bundle tidak dipecah
        }
      }
    }
  }
})
