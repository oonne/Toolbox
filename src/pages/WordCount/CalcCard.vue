<template>
  <TextInput
    v-model:text="input"
    placeholder="输入需要统计的文本"
  />

  <div class="button-warp">
    <SelectInput
      v-model:selected="chineseMode"
      label="中文"
      :options="chineseModeOptions"
    />
    <div class="result">
      字符数：{{ count }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { SelectOption } from '@/types/type';

const input = ref('');

const chineseModeOptions: SelectOption[] = [
  { value: '1', name: '1字符' },
  { value: '2', name: '2字符' },
];
const chineseMode = ref('1');

/* 统计字数：中文=2 时中文字符算2，否则每字符算1 */
function getCount(text: string, mode: string): number {
  if (!text) return 0;
  if (mode === '1') return text.length;
  const chineseRegex = /[\u4e00-\u9fff]/g;
  const chineseMatches = text.match(chineseRegex);
  const chineseLen = chineseMatches ? chineseMatches.length : 0;
  return chineseLen * 2 + (text.length - chineseLen);
}

const count = computed(() => getCount(input.value, chineseMode.value));
</script>

<style scoped>
.button-warp {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media screen and (max-width: 680px) {
  .button-warp {
    flex-direction: column;
    align-items: end;
  }
}

.result {
  margin: 8px 12px;
  padding: 12px;
  font-size: 1.6rem;
  color: var(--color);
}
</style>
