<script setup lang="ts">
import { ref } from 'vue';
import qrcodeParser from 'qrcode-parser';
import { HTMLInputEvent } from '../../types/type';

const output = ref('');

/* 文件选择 */
const onFileChange = async (event: Event) => {
  if (!event.target) {
    return;
  }
  output.value = '解析中...';

  output.value = await (qrcodeParser(((event as HTMLInputEvent).target.files as FileList)[0]));
};

/* 文件拖拽 */
window.addEventListener('dragenter', (event) => { event.preventDefault(); }, false);
window.addEventListener('dragleave', (event) => { event.preventDefault(); }, false);
window.addEventListener('dragover', (event) => { event.preventDefault(); }, false);
window.addEventListener('drop', async (event) => {
  if (!event.dataTransfer) {
    return;
  }
  output.value = '解析中...';

  event.preventDefault();
  output.value = await (qrcodeParser(event.dataTransfer.files[0]));
}, false);
</script>

<template>
  <label
    class="drop"
  >
    拖拽文件到此处
    <input
      v-show="false"
      type="file"
      @change="onFileChange"
    >
  </label>

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
