<template>
  <main>
    <TemplateRoot>

      <slot name="header"></slot>
    </TemplateRoot>

    <div class="columns-1 gap-0 md:columns-2">
      <TemplateRoot>
        <slot name="default"></slot>
      </TemplateRoot>
      <TemplateRoot>
        <slot name="side"></slot>
      </TemplateRoot>
    </div>

    <TemplateRoot>
      <slot name="footer"></slot>
    </TemplateRoot>
  </main>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>
