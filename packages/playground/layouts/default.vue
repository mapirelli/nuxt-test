<script setup lang="ts"></script>

<template>
  <div>
    <TemplateRoot>
      <template #name>Site Layout</template>
      <TemplateRoot>
        <template #name>Site Header</template>
        <TheHeader></TheHeader>
      </TemplateRoot>
      <TemplateRoot>
        <template #name>Site Content</template>
        <slot></slot>
      </TemplateRoot>
      <TemplateRoot>
        <template #name>Site Footer</template>
        <TheFooter></TheFooter>
      </TemplateRoot>
    </TemplateRoot>
  </div>
</template>
