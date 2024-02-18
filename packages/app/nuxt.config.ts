  // https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    telemetry: false,
  },
  build: {
    analyze: true
  },
  experimental: {
    defaults: {
      nuxtLink: {
        prefetchedClass:'prefetched'
      }
    }
  },
  components: {
    dirs: ['~/components', '~/components/page', '~/components/dev'],
  },
  extends: ['../core-layer'],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    
    strategy: 'no_prefix', // we use our router instead, this will raise a warning message, dont warry about that
    //vueI18n: './config/i18n.config.ts',
    baseUrl: process.env.DOMAIN_IT,
    differentDomains: false,
    detectBrowserLanguage: false,
    skipSettingLocaleOnNavigate: true,
    lazy: true, //https://i18n.nuxtjs.org/guide/lazy-load-translations#lazy-configuration-options
    langDir: 'lang',
    defaultLocale: 'it',
    locales: [
      {
        name: 'Italia',
        code: 'it',
        iso: 'it-IT',
        files: ['it-IT.json', { path: 'seo/it-IT.ts'}],
      },
      {
        name: 'España',
        code: 'es',
        iso: 'es-ES',
        files: ['es-ES.json', { path: 'seo/es-ES.ts'}],
      },
      {
        name: 'Deutchland',
        code: 'de',
        iso: 'de-DE',
        files: ['de-DE.json', { path: 'seo/de-DE.ts'}],
      },
      {
        name: 'Great Britain',
        code: 'en',
        iso: 'en-GB',
        files: ['en-GB.json', { path: 'seo/en-GB.ts'}],
      },
    ],
  },
 
})
