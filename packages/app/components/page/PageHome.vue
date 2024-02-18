<template>
  <div>
    <div>Carosello per categoria: {{ activeCategory }}</div>
    <NavCategoryFilter />
  </div>
</template>

<script lang="ts" setup>
//If you use <NuxtLayout> within your pages, make sure it is not the root element (or disable layout/page transitions).
const props = defineProps({
  category: {
    type: String,
    required: false,
    default: null,
  },
})

const { activeCategory, categoryExist, setCategory, resetCategory } = useCategory()

if (props.category !== null) {
  if (!categoryExist(props.category)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found: ' + useRoute().path,
    })
  }
  setCategory(props.category)
} else {
  resetCategory()
}

usePageSeo({
  category: activeCategory.value,
})
</script>
<style scoped></style>
