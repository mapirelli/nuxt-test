<script setup>
const abortController = new AbortController()

const { status } = useAsyncData('testApi', () =>
  $fetch('https://hub.dummyapis.com/delay?seconds=1', {
    signal: abortController.signal,
  })
)

const cancelRequest = () => {
  abortController.abort()
}
</script>

<template>
  <div>
    <span>Status: {{ status }}</span>
    <button @click="execute">Trigger Request</button>
    <button @click="cancelRequest">Cancel Request</button>
  </div>
</template>
