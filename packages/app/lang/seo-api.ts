export default defineI18nLocale(locale => {
  // for example, fetch locale messages from nuxt server
  return $fetch(`/api/${locale}`)
})
