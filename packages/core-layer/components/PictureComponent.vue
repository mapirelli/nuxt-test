<script lang="ts" setup>
interface Picture {
  sources?: Source[]
  image: Image
}
interface Source {
  id: number
  media: string
  srcset: string
  type: string
}
interface Image {
  src: string
  alt: string
}
defineProps<{ picture: Picture }>()
</script>

<template>
  <picture v-if="picture">
    <template v-for="source in picture.sources" :key="source.id">
      <source :media="source.media" :srcset="source.srcset" :type="source.type" />
    </template>
    <img :src="picture.image.src" :alt="picture.image.alt" />
  </picture>
  <template v-else> No picture provided </template>
</template>
<style scoped></style>
