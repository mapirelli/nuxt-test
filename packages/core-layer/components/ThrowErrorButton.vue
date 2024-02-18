<script lang="ts" setup>
let env = 'client'
if (process.server) env = 'server'
const route = useRoute()
function throwError() {
  throw createError({
    statusCode: 500,
    statusMessage: 'Test createError env: ' + env + ' Route:' + route.path,
  })
}
</script>

<template>
  <div>
    <p class="mb-3">
      Clicca sul bottone per verificare che l'integrazione con Sentry sta funzionando. Accedi a Sentry per verificare la
      creazione dell'errore.
    </p>
    <button
      class="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      @click="throwError"
    >
      Throw an error
    </button>
  </div>
</template>

<style scoped></style>
