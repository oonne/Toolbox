<template>
  <TextInput
    v-model:text.lazy="input"
    text-area-class="min-height-6"
    placeholder="输入需要统计的文本"
  />

  <div class="button-warp">
    <SelectInput
      v-model:selected="chineseMode"
      label="中文计法"
      :options="chineseModeOptions"
    />
    <ConfirmButton
      text="统计"
      :disable="input===''"
      @click="onCount"
    />
  </div>

  <div
    v-if="count !== null"
    class="result"
  >
    字符数：{{ count }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { SelectOption } from '@/types/type';

const input = ref('');
const count = ref<number | null>(null);

const chineseModeOptions: SelectOption[] = [
  { value: '2', name: '中文=2字符' },
  { value: '1', name: '中文=1字符' },
];
const chineseMode = ref('2');

/* 统计字数：中文=2 时中文字符算2，否则每字符算1 */
function getCount(text: string, mode: string): number {
  if (!text) return 0;
  if (mode === '1') return text.length;
  const chineseRegex = /[\u4e00-\u9fff]/g;
  const chineseMatches = text.match(chineseRegex);
  const chineseLen = chineseMatches ? chineseMatches.length : 0;
  return chineseLen * 2 + (text.length - chineseLen);
}

const onCount = () => {
  count.value = getCount(input.value, chineseMode.value);
};
</script>

<style scoped>
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

.result{
  margin: 8px 12px;
  padding: 12px;
  background-color: var(--input-background);
  color: var(--color);
}
</style>
