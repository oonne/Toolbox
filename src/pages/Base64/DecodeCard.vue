<script setup lang="ts">
import { ref } from 'vue';

const input = ref('');
</script>

<template>
  <div class="input-warp">
    <TextInput v-model:text="input" />
    <BlankSpace />
    <TextInput
      text=""
      readonly
    />
  </div>
  <div class="button-warp">
    <BlankSpace />
    <ConfirmButton text="解码" />
  </div>
</template>

<style scoped>
.input-warp{
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.button-warp{
  display: flex;
  justify-content: space-between;
}

</style>
