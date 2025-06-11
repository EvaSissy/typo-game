<script setup lang="ts">
defineProps<{ scale: number }>()
</script>

<template>
  <h1 class="history-item" :style="{ scale, opacity: scale }">
    <slot />
  </h1>
</template>

<style scoped>
.history-item {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>