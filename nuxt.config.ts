// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 Starter',
      meta: [
        { name: 'description', content: 'Nuxt 3 Starter' }
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    // '@': resolve(__dirname, '/')
    // assets:'/<rootDir>/assets'
  },
  modules: [
    '@pinia/nuxt',
  ],
  ssr: false
})
