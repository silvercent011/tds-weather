// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY || "",
      API_URL: process.env.API_URL || "",
    },
  },
});
