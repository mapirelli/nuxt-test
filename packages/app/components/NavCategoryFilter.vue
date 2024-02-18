<template>
  <nav>
    <div class="mb-3">Attiva la ricerca per categoria disponibile in home (pre-filtro SERP)</div>
    <ul class="flex flex-wrap gap-x-2">
      <li v-for="(category, index) in getCategories()" :key="category">
        <NuxtLink v-if="index === 0" :to="'/'" :no-prefetch="true">{{ category }}</NuxtLink>
        <NuxtLink v-else :to="{ name: routeName.home_category, params: { category: category } }">{{
          category
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const { getCategories } = useCategory()
const routeName = useRouteName()
</script>

<style scoped></style>
