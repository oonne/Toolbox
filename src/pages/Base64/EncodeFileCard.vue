<script setup lang="ts">
import { ref } from 'vue';
import { HTMLInputEvent } from '../../types/type';

const output = ref('');

/* 文件选择 */
const onFileChange = (event: Event) => {
  if (!event.target) {
    return;
  }
  output.value = '编码中...';

  const reader = new FileReader();
  reader.onload = (e) => {
    output.value = String(e?.target?.result);
  };
  reader.readAsDataURL(((event as HTMLInputEvent).target.files as FileList)[0]);
};

/* 文件拖拽 */
window.addEventListener('dragenter', (event) => { event.preventDefault(); }, false);
window.addEventListener('dragleave', (event) => { event.preventDefault(); }, false);
window.addEventListener('dragover', (event) => { event.preventDefault(); }, false);
window.addEventListener('drop', (event) => {
  if (!event.dataTransfer) {
    return;
  }
  output.value = '编码中...';

  // 读取文件
  const reader = new FileReader();
  reader.onload = (e) => {
    output.value = String(e?.target?.result);
  };
  reader.readAsDataURL(event.dataTransfer.files[0]);

  event.preventDefault();
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
