/**
 * @description the composable use the route name and the i18n plugin to manage the localized seo attributes for the app.
 * @param named the parameters to send with the associated translation key
 */
export const usePageSeo = (named: Record<string, unknown> = {}): void => {
  interface SeoMetaKeys {
    robots: string
    title: string
    description: string
  }
  const { t } = useI18n()

  named.country = useCountry() //automatically include the country ??
  named.domain = useDomain() //automatically include the domain ??

  const robots = getSeoMeta('robots')
  const title = getSeoMeta('title')
  const description = getSeoMeta('description')

  useSeoMeta({
    robots: robots,
    title: title,
    description: description,
    ogTitle: title,
    ogDescription: description,
  })

  function getSeoMeta(name: string) {
    type KeyOfSeoMetaKeys = keyof SeoMetaKeys
    const key = getRouteKey()[name as KeyOfSeoMetaKeys]
    const fallbackKey = getFallbackKey()[name as KeyOfSeoMetaKeys]
    const title = t(key, named)

    if (title === key) return t(fallbackKey, named)
    return title
  }

  function getRouteKey(): SeoMetaKeys {
    const route = useRoute()
    if (route.name === undefined) return getFallbackKey()
    const routeName = route.name as string
    return {
      robots: 'seo.routes.' + routeName + '.robots',
      title: 'seo.routes.' + routeName + '.title',
      description: 'seo.routes.' + routeName + '.description',
    }
  }
  function getFallbackKey(): SeoMetaKeys {
    return {
      robots: 'seo.fallback.robots',
      title: 'seo.fallback.title',
      description: 'seo.fallback.description',
    }
  }
}
