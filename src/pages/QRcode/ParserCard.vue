<script setup lang="ts">
import { ref } from 'vue';
import qrcodeParser from 'qrcode-parser';

const output = ref('');

/* 解析二维码 */
const parse = async (file: Blob) => {
  if (file.type !== 'image/png') {
    output.value = '仅支持png格式的图片';
    return;
  }

  output.value = '解析中...';

  output.value = await qrcodeParser(file);
};
</script>

<template>
  <FileInput
    placeholder="拖拽文件到此处（仅限png格式）"
    @change="parse"
  />

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
