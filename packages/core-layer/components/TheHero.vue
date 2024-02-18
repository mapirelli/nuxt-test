<script lang="ts" setup>
import PictureComponent from './PictureComponent.vue'
import TheHeroSearchButton from './TheHeroSearchButton.vue'

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
defineProps<{
  picture: Picture
}>()
const emit = defineEmits(['search-click'])
function searchClick() {
  emit('search-click')
}
</script>

<template>
  <div class="relative h-[345px] overflow-hidden md:h-[425px] lg:h-[435px] xl:h-[580px]">
    <div class="absolute">
      <PictureComponent :picture="picture"></PictureComponent>
    </div>
    <div class="absolute bottom-[20%] w-full">
      <TheHeroSearchButton :label="'My label updated'" @search-click="searchClick"></TheHeroSearchButton>
    </div>
  </div>
</template>

<style scoped></style>
