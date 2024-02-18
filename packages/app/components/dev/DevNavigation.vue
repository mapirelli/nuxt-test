<template>
  <TemplateRoot>
    <nav>
      <ul class="flex items-center divide-x divide-gray-400 dark:divide-gray-600">
        <li>
          <NuxtLink to="/" :no-prefetch="true">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'dev-routes' }" :no-prefetch="true">Routes</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ name: 'dev-hero' }" :no-prefetch="true">Hero</NuxtLink>
        </li>
      </ul>
    </nav>
  </TemplateRoot>
</template>

<script lang="ts" setup></script>

<style scoped></style>
