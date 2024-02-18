<template>
  <div>
    Pagina città per category: {{ category }}
    <h1>Elenco di card di città</h1>
    <h1>Altre città...</h1>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
})

const { categoryExist } = useCategory()
if (!categoryExist(props.category)) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found: ' + useRoute().path,
  })
}

usePageSeo({
  category: props.category,
})
</script>

<style scoped></style>
