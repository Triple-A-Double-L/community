// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
    '@primevue/nuxt-module',
    '@nuxt/fonts',
    '@nuxt/scripts'
  ]
})