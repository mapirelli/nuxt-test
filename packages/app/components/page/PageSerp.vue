<template>
  <div>
    <div>Pagina S.E.R.P. (Search engine result page)</div>
    <div>Categoria (pre-filtro): {{ category }}</div>
    <div>Provincia (capoluogo/provincia): {{ province }}</div>
    <div>City (citta): {{ city }}</div>
    <div>Page (pagina): {{ page }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: false,
    default: null,
  },
  city: {
    type: String,
    required: false,
    default: null,
  },
  page: {
    type: String,
    required: false,
    default: '1',
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
  province: props.province,
  city: props.city,
  page: props.page,
})
</script>

<style scoped></style>
