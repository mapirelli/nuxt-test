<script lang="ts" setup></script>

<template>
  <div class="bg-gray-300 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between">
      <TemplateRoot class="flex-none"><template #name>Logo</template>Logo</TemplateRoot>
      <TemplateRoot class="flex-auto"
        ><template #name>Navigation</template><TheHeaderNavigation></TheHeaderNavigation
      ></TemplateRoot>
      <TemplateRoot class="flex-none"><template #name>Locale</template><ChangeLocale /></TemplateRoot>
      <TemplateRoot class="flex-none"><template #name>Theme</template><ChangeColorMode /></TemplateRoot>
    </div>
  </div>
</template>

<style scoped></style>
