<template>
  <nav>
    <ul class="divide-y divide-gray-400 dark:divide-gray-600">
      <li>
        <NuxtLink :to="'/'" :no-prefetch="true">/ (Home)</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: routeName.faq }" :no-prefetch="true">{{ localePath(routeName.faq) }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: routeName.faq_id, params: { id: 1 } }" :no-prefetch="true">{{
          localePath({ name: routeName.faq_id, params: { id: 1 } })
        }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: routeName.news }" :no-prefetch="true">{{ localePath(routeName.news) }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: routeName.news_id, params: { id: 1 } }" :no-prefetch="true">{{
          localePath({ name: routeName.news_id, params: { id: 1 } })
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const localePath = useLocalePath()
const routeName = useRouteName()
</script>