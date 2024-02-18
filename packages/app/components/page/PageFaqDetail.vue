<template>
  <div>Current ID (faq): {{ id }}</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
usePageSeo({ id: props.id })
</script>

<style scoped></style>
