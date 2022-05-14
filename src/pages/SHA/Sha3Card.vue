<script setup lang="ts">
import { ref } from 'vue';
import SHA3 from 'js-sha3';
import { SelectOption } from '../../types/type';

/* 算法 */
const methodSelectOptions: SelectOption[] = [
  {
    value: 'sha3_224',
    name: 'SHA3-224',
  },
  {
    value: 'sha3_256',
    name: 'SHA3-256',
  },
  {
    value: 'sha3_384',
    name: 'SHA3-384',
  },
  {
    value: 'sha3_512',
    name: 'SHA3-512',
  },
];

const method = ref('sha3_512');
const input = ref('');
const output = ref('');

/*
 * 计算
 * 由于 crypto-js 的 sha3 函数，实际上是 Keccak算法 ，计算结果与SHA3不同，因此使用js-sha3来计算
 */
type HashMethod = 'sha3_224' | 'sha3_256' | 'sha3_384' | 'sha3_512';
const onCalc = () => {
  output.value = SHA3[method.value as HashMethod](input.value);
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
