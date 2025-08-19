export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      printerIp: process.env.PRINTER_IP,
      printerPort: process.env.PRINTER_PORT
    }
  },
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
