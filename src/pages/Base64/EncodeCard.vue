<script setup lang="ts">
import { ref } from 'vue';
import { enc } from 'crypto-js';

const input = ref('');
const output = ref('');

/* 编码 */
const onEncode = () => {
  output.value = enc.Base64.stringify(enc.Utf8.parse(input.value));
};
</script>

<template>
  <div class="input-warp">
    <TextInput
      v-model:text="input"
      placeholder="编码前"
    />
    <TextInput
      placeholder="编码后"
      :text="output"
      readonly
    />
  </div>
  <div class="button-warp">
    <ConfirmButton
      text="编码"
      :disable="input===''"
      @click="onEncode"
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
