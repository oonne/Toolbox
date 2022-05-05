<script setup lang="ts">
import { ref } from 'vue';
import { enc } from 'crypto-js';

const input = ref('');
const output = ref('');

/* 解码 */
const onDecode = () => {
  output.value = enc.Utf8.stringify(enc.Base64.parse(input.value));
};

</script>

<template>
  <div class="input-warp">
    <TextInput v-model:text="input" />
    <TextInput
      :text="output"
      readonly
    />
  </div>
  <div class="button-warp">
    <ConfirmButton
      text="解码"
      :disable="input===''"
      @click="onDecode"
    />
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
