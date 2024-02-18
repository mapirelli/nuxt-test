// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    telemetry: false,
  },
  extends: ['../core-layer'],
  modules: ['@nuxtjs/storybook', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './config/i18n.config.ts',
    baseUrl: process.env.DOMAIN_IT,
    langDir: 'lang',
    defaultLocale: 'it',
    differentDomains: true,
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: false,
    locales: [
      {
        name: 'Italia',
        code: 'it',
        iso: 'it-IT',
        file: 'it-IT.json',
        domain: process.env.DOMAIN_IT,
      },
      {
        name: 'España',
        code: 'es',
        iso: 'es-ES',
        file: 'es-ES.json',
        domain: process.env.DOMAIN_ES,
      },
      {
        name: 'Deutchland',
        code: 'de',
        iso: 'de-DE',
        file: 'de-DE.json',
        domain: process.env.DOMAIN_DE,
      },
      {
        name: 'Great Britain',
        code: 'en',
        iso: 'en-GB',
        file: 'en-GB.json',
        domain: process.env.DOMAIN_EN,
      },
    ],
  },
})
