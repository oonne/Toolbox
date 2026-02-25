<template>
  <TextInput
    v-model:text.lazy="input"
    placeholder="解码前"
  />

  <div class="button-warp">
    <ConfirmButton
      text="解码"
      :disable="input===''"
      @click="onDecode"
    />
  </div>

  <TextInput
    v-if="!!output"
    :text="output"
    placeholder="解码后"
    readonly
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import message from '@/components/message';

const input = ref('');
const output = ref('');

/* 解码 \uXXXX 与 \u{XXXXX} 为字符 */
function decodeUnicode(str: string): string {
  return str
    .replace(/\\u\{([0-9a-fA-F]+)\}/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

/* 解码 */
const onDecode = () => {
  try {
    output.value = decodeUnicode(input.value);
  } catch {
    message('解码失败');
  }
};
</script>

<style scoped>

.button-warp{
  display: flex;
  justify-content: flex-end;
}

</style>
