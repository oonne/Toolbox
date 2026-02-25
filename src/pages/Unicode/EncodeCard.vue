<template>
  <TextInput
    v-model:text.lazy="input"
    placeholder="编码前"
  />

  <div class="button-warp">
    <ConfirmButton
      text="编码"
      :disable="input===''"
      @click="onEncode"
    />
  </div>

  <TextInput
    v-if="!!output"
    placeholder="编码后"
    :text="output"
    readonly
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import message from '@/components/message';

const input = ref('');
const output = ref('');

/* 将字符串编码为 \uXXXX 形式（支持 BMP 外字符的 surrogate pair） */
function encodeUnicode(str: string): string {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const code = str.codePointAt(i) ?? 0;
    if (code <= 0xFFFF) {
      result += `\\u${code.toString(16).padStart(4, '0')}`;
    } else {
      const high = 0xD800 + Math.floor((code - 0x10000) / 0x400);
      const low = 0xDC00 + ((code - 0x10000) % 0x400);
      result += `\\u${high.toString(16).padStart(4, '0')}\\u${low.toString(16).padStart(4, '0')}`;
      i += 1;
    }
  }
  return result;
}

/* 编码 */
const onEncode = () => {
  try {
    output.value = encodeUnicode(input.value);
  } catch {
    message('编码失败');
  }
};
</script>

<style scoped>
.button-warp{
  display: flex;
  justify-content: flex-end;
}

</style>
