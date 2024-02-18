<template>
  <main>
    <TemplateRoot>
      <template #name>Page header</template>

      <slot name="header"></slot>
    </TemplateRoot>

    <div class="columns-1 gap-0 md:columns-2">
      <TemplateRoot>
        <template #name>Page dafault</template>
        <slot name="default"></slot>
      </TemplateRoot>
      <TemplateRoot>
        <template #name>Page side</template>
        <slot name="side"></slot>
      </TemplateRoot>
    </div>

    <TemplateRoot>
      <template #name>Page footer</template>
      <slot name="footer"></slot>
    </TemplateRoot>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped></style>
