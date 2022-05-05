<script setup lang="ts">

const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="button">
    {{ props.text }}
  </div>
</template>

<style scoped>
.button{
  background-color: var(--input-background);
  padding: 12px 24px;
  cursor: pointer;
}
</style>
