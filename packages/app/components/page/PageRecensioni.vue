<template>
  <div>
     Current ID (phone number / profile): {{ id }}
  </div>
</template>

<script setup lang="ts">
//If you use <NuxtLayout> within your pages, make sure it is not the root element (or disable layout/page transitions).
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

usePageSeo({
  number: props.id,
  username: 'jonh doe',
  escort_description: 'beautifull girl',
})
</script>
