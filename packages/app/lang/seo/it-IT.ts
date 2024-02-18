export default {
  seo: {
    fallback: {
      robots: 'noindex, nofollow',
      title: 'Seo default title for {country}',
      description: 'Seo default description for {country}',
    },
    routes: {
      home: {
        title: 'Seo title for the home route ({domain}/)',
        description: 'Seo description for the home route: domain {domain} country {country} category {category}',
      },
      home_category: {
        title: 'Seo title for the home_category ({domain}/home-{category})',
        description: 'Seo description for the home_category route: category {category}',
      },
      category: {
        title: 'Seo title for the category route ({domain}/{category})',
        description: 'Seo description for the category route: category {category}',
      },
      cronache: {
        title: 'Seo title for the cronache ({domain}/cronache) route',
        description: 'Seo description for the cronache route',
      },
      cronache_id: {
        title: 'Seo title for the cronache_id ({domain}/cronache/{id}) route',
        description: 'Seo description for the cronache_id route: id {id}',
      },
      category_province_page: {
        title: 'Seo title for the category_province_page route ({domain}/{category}/{province}/{page})',
        description:
          'Seo description for the category_province_page route: category {category}, province {province}, page {page}',
      },
      category_city_city_page: {
        title: 'Seo title for the category_city_city_page route ({domain}/{category}/city/{city}/{page})',
        description:
          'Seo description for the category_city_city_page route: category {category}, city {city}, page {page}',
      },
      recensioni_id: {
        title: 'Seo title for the recensioni_id route ({domain}/recensioni/{number})',
        description:
          'Seo description for the recensioni_id route: numero {number} user {username} escort description {escort_description}',
      },
      user_id_created: {
        title: 'Seo title for the user_id_created route ({domain}/user/{user_id}/{created})',
        description: 'Seo description for the user_id_created route: user {user_id}, created {created}',
      },
      news: {
        title: 'Seo title for the news route ({domain}/news)',
        description: 'Seo description for the news route',
      },
      news_id: {
        title: 'Seo title for the news route detail ({domain}/news/{id})',
        description: 'Seo description for the news route detail: {id}',
      },
      faq: {
        title: 'Seo title for the faq route ({domain}/faq)',
        description: 'Seo description for the faq route',
      },
      faq_id: {
        title: 'Seo title for the faq route detail ({domain}/faq/{id})',
        description: 'Seo description for the faq route detail: {id}',
      },
      ea_contacts: {
        title: 'Seo title for the contacts route ({domain}/ea/contacts)',
        description: 'Seo description for the contacts route',
      },
      ea_rev: {
        title: 'Seo title for the ea_rev (scrivi recensione) route ({domain}/ea/rev)',
        description: 'Seo description for the ea_rev (scrivi recensione) route',
      },
      whyreview: {
        title: 'Seo title for the whyreview route ({domain}/whyreview)',
        description: 'Seo description for whyreview route',
      },
    },
  },
}
