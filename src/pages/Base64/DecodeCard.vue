<script setup lang="ts">
import { ref } from 'vue';

const input = ref('');
</script>

<template>
  <div class="input-warp">
    <TextInput v-model:text="input" />
    <TextInput
      text=""
      readonly
    />
  </div>
  <div class="button-warp">
    <ConfirmButton text="解码" />
  </div>
</template>

<style scoped>
.input-warp{
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}

.button-warp{
  display: flex;
  justify-content: flex-end;
}

</style>
