// https://nuxt.com/docs/api/configuration/nuxt-config
import { sentryVitePlugin } from '@sentry/vite-plugin'

export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    public: {
      // Keys within public, will be also exposed to the client-side
      sentry: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.SENTRY_ENVIRONMENT,
      },
    },
  },

  vite: {
    build: {
      sourcemap: true, // Source map generation must be turned on
    },
    plugins: [
      // Put the Sentry vite plugin after all other plugins
      sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        telemetry: false,
      }),
    ],
  },
})
