<script setup lang="ts">
import { ref } from 'vue';
import qrcodeParser from 'qrcode-parser';

const output = ref('');

/* 解析二维码 */
const parse = async (file: Blob) => {
  output.value = '解析中...';

  output.value = await (qrcodeParser(file));
};
</script>

<template>
  <FileInput @change="parse" />

  <TextInput
    v-show="!!output"
    :text="output"
    readonly
  />
</template>

<style scoped>
.drop{
  display: block;
  margin: 8px 8px 16px;
  height: 6rem;
  line-height: 6rem;
  font-size: 1.6rem;
  text-align: center;
  background-color: var(--input-background);
  border: 4px dashed var(--color);
  cursor: pointer;
  opacity: 0.7;
}
.drop:hover{
  opacity: 1;
}
</style>
