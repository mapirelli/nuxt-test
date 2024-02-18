<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="p-4">
    Home page
    <div>Saluto tradotto: {{ t('hello') }}</div>
  </div>
</template>
