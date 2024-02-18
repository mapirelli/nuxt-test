<template>
  <nav>
    <ul class="flex items-center gap-x-2">
      <li v-for="locale in locales" :key="locale.code">
        <NuxtLink :to="switchLocalePath(locale.code)" class="underline underline-offset-2">
          {{ locale.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
//https://i18n.nuxtjs.org/getting-started/basic-usage
const { locales } = useI18n()
//const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
/* if we want to remove current locale from list
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
*/
</script>

<style scoped></style>
