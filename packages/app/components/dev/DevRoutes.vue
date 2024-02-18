<template>
  <div>
    <ul>
      <li class="flex gap-x-2">
        <div class="w-40 border-b">Name</div>
        <div class="w-36 border-b">Path</div>
        <div class="w-36 border-b">Redirect</div>
        <div class="w-24 border-b">Props</div>
        <div class="w-80 border-b">Props input</div>
        <div class="w-36 border-b">Loaded (Lazy)</div>
      </li>
      <li v-for="route in routes" :key="route.name" class="flex gap-x-2">
        <div class="w-40 border-b">{{ route.name }}</div>
        <div class="w-36 border-b">{{ route.path }}</div>
        <div class="w-36 border-b">{{ route.redirect }}</div>
        <div
          class="w-24 border-b"
          :class="{ 'bg-slate-200': route.props.default === false, 'bg-green-200': route.props.default === true }"
        >
          {{ route.props.default }}
        </div>
        <div class="w-80 border-b">
          <div v-if="route.components?.default !== undefined">{{ route.components.default.props }}</div>
        </div>
        <div class="w-36 border-b">
          <div v-if="typeof route.components?.default !== 'function'">
            <div v-if="route.components?.default !== undefined">{{ route.components.default.__file }}</div>
          </div>
          <div v-else class="bg-yellow-200">false</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const routes = router.getRoutes()
</script>

<style scoped></style>
