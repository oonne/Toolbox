<script setup lang="ts">
import { ref } from 'vue';
import { SelectOption } from '../../types/type';

const keyLenSelectOptions: SelectOption[] = [
  {
    value: 512,
    name: '512位',
  },
  {
    value: 1024,
    name: '1024位',
  },
  {
    value: 2048,
    name: '2048位',
    selected: true,
  },
  {
    value: 4096,
    name: '4096位',
  },
];

const bit = ref(2048);

const generate = () => {
  console.log(bit.value);
};
</script>

<template>
  <div class="button-warp">
    <SelectInput
      v-model:selected="bit"
      label="秘钥长度"
      :options="keyLenSelectOptions"
    />
    <ConfirmButton
      text="生成"
      @click="generate"
    />
  </div>
</template>

<style scoped>
.button-warp{
  display: flex;
  justify-content: space-between;
}
</style>
