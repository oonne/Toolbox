<script setup lang="ts">
import { ref } from 'vue';
import CryptoJS from 'crypto-js';

const input = ref('');
const output = ref('');

/* 计算 */
const onCalc = () => {
  output.value = CryptoJS.MD5(input.value).toString();
};
</script>

<template>
  <div class="input-warp">
    <TextInput
      v-model:text.lazy="input"
      placeholder="内容"
    />
    <TextInput
      placeholder="MD5"
      :text="output"
      readonly
    />
  </div>
  <div class="button-warp">
    <ConfirmButton
      text="计算"
      :disable="input===''"
      @click="onCalc"
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
