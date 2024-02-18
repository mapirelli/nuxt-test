<template>
  <nav>
    <ul class="divide-y divide-gray-400 dark:divide-gray-600">
      <li class="bg-green-200">
        <NuxtLink
          :to="{ name: routeName.category_province_page, params: { category: activeCategory, province: 'milano' } }" :no-prefetch="true">
          /{{ activeCategory }}/milano
        </NuxtLink>
      </li>
      <li class="bg-green-200">
        <NuxtLink
          :to="{ name: routeName.category_province_page, params: { category: activeCategory, province: 'milano', page: 2 } }" :no-prefetch="true">
          /{{ activeCategory }}/milano/2
        </NuxtLink>
      </li>
      <li class="bg-green-200">
        <NuxtLink
          :to="{ name: routeName.category_city_city_page, params: { category: activeCategory, city: 'lainate' } }" :no-prefetch="true">
          /{{ activeCategory }}/city/lainate
        </NuxtLink>
      </li>
      <li class="bg-green-200">
        <NuxtLink
          :to="{ name: routeName.category_city_city_page, params: { category: activeCategory, city: 'lainate', page: 2 } }" :no-prefetch="true">
          /{{ activeCategory }}/city/lainate/2
        </NuxtLink>
      </li>
      <li class="bg-green-200">
        <NuxtLink :to="{ name: routeName.category, params: { category: activeCategory } }" :no-prefetch="true">/{{
          activeCategory }} ({{
    t('nav.other_cities') }})</NuxtLink>
      </li>
      <li class="bg-pink-200">
        <NuxtLink :to="{ name: routeName.recensioni_id, params: { id: 1 } }" :no-prefetch="true">{{
          localePath({ name: routeName.recensioni_id, params: { id: 1 } })
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const { activeCategory } = useCategory()
const localePath = useLocalePath()
const routeName = useRouteName()
</script>

<style scoped></style>
