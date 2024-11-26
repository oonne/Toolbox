<script setup lang="ts">
import { ref } from 'vue';
import scrypt from 'scrypt-js';
import type { SelectOption } from '@/types/type';

const input = ref('');
const salt = ref('');
const dkLen = ref(64);
const output = ref('');

// n（计算难度）
const nSelectOptions: SelectOption[] = [
  {
    value: 2 ** 10,
    name: '1024',
  },
];
const n = ref(2 ** 10);

// r（内存消耗）
const rSelectOptions: SelectOption[] = [
  {
    value: 8,
    name: '8',
  },
];
const r = ref(8);

// p（并行计算）
const pSelectOptions: SelectOption[] = [
  {
    value: 1,
    name: '1',
  },
];
const p = ref(1);

/* 计算 */
const onCalc = () => {
  output.value = '计算中';

  const inputArr = new TextEncoder().encode(input.value);
  const saltArr = new TextEncoder().encode(salt.value);
  const res = scrypt.syncScrypt(
    inputArr,
    saltArr,
    Number(n.value),
    Number(r.value),
    Number(p.value),
    Number(dkLen.value),
  );

  output.value = Array.from(res).map((v) => v.toString(16).padStart(2, '0')).join('');
};
</script>

<template>
  <div class="input-warp">
    <TextInput
      v-model:text.lazy="input"
      text-area-class="min-height-6"
      placeholder="口令"
    />
    <TextInput
      v-model:text.lazy="salt"
      text-area-class="min-height-6"
      placeholder="盐"
    />
  </div>
  <div class="button-warp">
    <SelectInput
      v-model:selected="n"
      label="n (计算难度)"
      :options="nSelectOptions"
    />
    <SelectInput
      v-model:selected="r"
      label="r (内存消耗)"
      :options="rSelectOptions"
    />
    <SelectInput
      v-model:selected="p"
      label="p (并行计算)"
      :options="pSelectOptions"
    />
    <ValueInput
      v-model:value="dkLen"
      input-class="center width-40"
      type="number"
      label="输出长度"
    />
    <ConfirmButton
      text="计算"
      :disable="input==='' || salt==='' || !dkLen"
      @click="onCalc"
    />
  </div>
  <TextInput
    v-if="!!output"
    placeholder="秘钥"
    :text="output"
    readonly
  />
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
@media screen and (max-width: 680px) {
  .button-warp{
    flex-direction: column;
    align-items: end;
  }
}

</style>
