<script lang="ts" setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

export interface Props {
  label: string
}

withDefaults(defineProps<Props>(), {
  label: 'Placeholder',
})

const emit = defineEmits(['search-click'])
function searchClick() {
  emit('search-click')
}
</script>

<template>
  <div
    class="lg:border-3 m-auto w-3/4 rounded border border-pink-500 bg-white p-2 sm:w-2/3 sm:rounded-md sm:border-2 sm:p-3 lg:w-3/5 lg:rounded-lg lg:p-4 dark:bg-gray-900"
    @click="searchClick"
  >
    <div class="flex items-center justify-between">
      <div class="grow cursor-text text-sm text-neutral-500 sm:text-base lg:text-lg">
        {{ label }}
      </div>
      <MagnifyingGlassIcon class="h-4 w-4 text-neutral-500 sm:h-6 sm:w-6 sm:stroke-2 lg:h-8 lg:w-8" />
    </div>
  </div>
</template>

<style scoped></style>
