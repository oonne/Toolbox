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

/* 编码 */
const onEncode = () => {
  try {
    output.value = encodeURIComponent(input.value);
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
