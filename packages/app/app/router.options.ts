//request for comment to change the directory name app/router.options.ts  https://github.com/nuxt/nuxt/issues/19081: this will probably changed in Nuxt version 4.0
import type { RouterConfig } from '@nuxt/schema'
import { useRequestURL } from '#imports'
import type { RouteRecordRaw } from 'vue-router'
//import { defineAsyncComponent } from 'vue' //for future use in case we need to async load a SSR component

interface ILocalePath {
  recensioni: string
  cronache: string
}

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: pages_routes => configureRoutes(pages_routes),
}

/**
 * @description We LazyLoading routes with dynamic imports
 * @url https://router.vuejs.org/guide/advanced/lazy-loading.html
 */
const PageHome = () => import('@/components/page/PageHome.vue')
const PageCategory = () => import('@/components/page/PageCategory.vue')
const PageFaq = () => import('@/components/page/PageFaq.vue')
const PageFaqDetail = () => import('@/components/page/PageFaqDetail.vue')
const PageNews = () => import('@/components/page/PageNews.vue')
const PageNewsDetail = () => import('@/components/page/PageNewsDetail.vue')
const PageRecensioni = () => import('@/components/page/PageRecensioni.vue')
const PageSerp = () => import('@/components/page/PageSerp.vue')

/**
 * @param pages_routes
 * @returns readonly RouteRecordRaw[]
 */
function configureRoutes(pages_routes: readonly RouteRecordRaw[]): readonly RouteRecordRaw[] {
  const url = useRequestURL()
  const config = useRuntimeConfig()
  const locales = config.public.i18n.locales //locales and domains must be defined in runtime config
  const routes: RouteRecordRaw[] = new Array()
  const routeName = useRouteName()
  const localePath: ILocalePath = { recensioni: 'reviews', cronache: 'chronicles' }

  /**
   * Here we adds our custom routes that differs by domain, and we define our localized routes paths when necessary
   */
  if (url.host === locales.it.domain) {
    //it domain
    localePath.recensioni = 'recensioni'
  }
  if (url.host === locales.es.domain) {
    //es domain
    localePath.recensioni = 'opiniones'
  }
  if (url.host === locales.de.domain) {
    //de domain
    localePath.recensioni = 'bewertungen'
  }
  if (url.host === locales.en.domain) {
    //en domain
    localePath.recensioni = 'reviews'
  }

  /**
   * Here we adds pages_routes that comes from the scan of the directory '/pages' (it's a Nuxt framework convention).
   * If you dont want to use '/pages' routes comment this line
   */
  routes.push(...pages_routes)

  /**
   * Here we add our custom routes
   */
  routes.push(
    { name: routeName.home, path: '/', component: PageHome },
    { name: routeName.home_category, path: '/home-:category', component: PageHome, props: true },
    { name: routeName.category, path: '/:category', component: PageCategory, props: true },
    {
      name: routeName.category_province_page,
      path: '/:category/:province/:page(\\d+)?',
      component: PageSerp,
      props: true,
    },
    {
      name: routeName.category_city_city_page,
      path: '/:category/city/:city/:page(\\d+)?',
      component: PageSerp,
      props: true,
    },
    {
      name: routeName.recensioni_id,
      path: '/' + localePath.recensioni + '/:id(\\d+)',
      component: PageRecensioni,
      props: true,
    },
    
    { name: routeName.news, path: '/news', component: PageNews },
    { name: routeName.news_id, path: '/news/:id(\\d+)', component: PageNewsDetail, props: true },
    { name: routeName.faq, path: '/faq', component: PageFaq },
    { name: routeName.faq_id, path: '/faq/:id(\\d+)', component: PageFaqDetail, props: true },
  )

  /**
   * Here we add our custom redirects
   */
  //routes.push(...configureRedirects(localePath))

  return routes
}

/**
 *
 * @param localePath
 * @returns readonly RouteRecordRaw[]
 */
function configureRedirects(localePath: ILocalePath): readonly RouteRecordRaw[] {
  const routeName = useRouteName()
  const redirects: RouteRecordRaw[] = new Array()
  //redirects.push()
  return redirects
}
