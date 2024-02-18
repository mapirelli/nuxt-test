<script lang="ts" setup>
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true,
  },
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl">Pagina di errore</h1>
    <h2 class="my-2">{{ error.statusCode }}</h2>
    <p class="my-2">{{ error.statusMessage }}</p>
    <button
      class="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      @click="handleError"
    >
      Clear errors
    </button>
  </div>
</template>

<style scoped></style>
