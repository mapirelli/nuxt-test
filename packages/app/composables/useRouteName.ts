import type RouteNamesType from '~/app/routes'

const useRouteName = (): RouteNamesType => {
  return {
    home: 'home',
    home_category: 'home_category',
    category: 'category',
    category_province_page: 'category_province_page',
    category_city_city_page: 'category_city_city_page',
    recensioni_id: 'recensioni_id',
    news: 'news',
    news_id: 'news_id',
    faq: 'faq',
    faq_id: 'faq_id',
  }
}

export default useRouteName
