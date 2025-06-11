// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@pinia/nuxt"],
  i18n: {
    langDir: "../locales/",
    defaultLocale: "zh",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
    },
    strategy: "no_prefix",
    locales: [
      { code: "zh", file: "zh.json", name: "简体中文" },
      { code: "en", file: "en.json", name: "English" },
    ],
    lazy: true
  },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/_variables.scss" as *;`,
        },
      },
    },
  },
});
