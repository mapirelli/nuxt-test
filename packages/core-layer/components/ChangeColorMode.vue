<template>
  <div class="flex items-center">
    <select v-model="$colorMode.preference" class="border dark:border-gray-700 dark:bg-gray-900 dark:text-white">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
