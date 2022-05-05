<script setup lang="ts">
const props = defineProps<{
  text: string;
  readonly?: boolean;
}>();

defineEmits(['update:text']);
</script>

<template>
  <textarea
    class="textarea"
    :value="props.text"
    :readonly="readonly"
    @input="$emit('update:text', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<style scoped>
.textarea{
  flex-grow: 1;
  min-height: 10rem;
  min-width: 16rem;
  margin: 8px;
  overflow: auto;
  border: none;
  outline: none;
  padding: 16px;
  background: var(--input-background);
  color: var(--color);
}
</style>
