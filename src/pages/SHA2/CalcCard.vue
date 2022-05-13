<script setup lang="ts">
import { ref } from 'vue';
import CryptoJS from 'crypto-js';
import { SelectOption } from '../../types/type';

/* 算法 */
const methodSelectOptions: SelectOption[] = [
  {
    value: 'SHA224',
    name: 'SHA-224',
  },
  {
    value: 'SHA256',
    name: 'SHA-256',
  },
  {
    value: 'SHA384',
    name: 'SHA-384',
  },
  {
    value: 'SHA512',
    name: 'SHA-512',
  },
];

const method = ref('SHA512');
const input = ref('');
const output = ref('');

/* 计算 */
const onCalc = () => {
  output.value = CryptoJS[method.value](input.value).toString();
};
</script>

<template>
  <div class="input-warp">
    <TextInput
      v-model:text.lazy="input"
      placeholder="内容"
    />
    <TextInput
      placeholder="哈希值"
      :text="output"
      readonly
    />
  </div>
  <div class="button-warp">
    <SelectInput
      v-model:selected="method"
      label="算法"
      :options="methodSelectOptions"
    />
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
