<script setup lang="ts">
import { ref } from 'vue';
import { enc } from 'crypto-js';
import message from '../../components/message';

const input = ref('');
const output = ref('');

/* 解码 */
const onDecode = () => {
  let string = '';
  try {
    string = enc.Utf8.stringify(enc.Base64.parse(input.value));
  } catch (e) {
    message('解码失败');
  }
  output.value = string;
};

</script>

<template>
  <div class="input-warp">
    <TextInput
      v-model:text="input"
      placeholder="解码前"
    />
    <TextInput
      :text="output"
      placeholder="解码后"
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
