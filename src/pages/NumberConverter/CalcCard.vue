<script setup lang="ts">
import { ref, watch } from 'vue';
import { Cal } from '@/utils/index';

const { times, divide } = Cal;

const number = ref(0);
const billion = ref(0);
const million = ref(0);
const thousand = ref(0);
const wan = ref(0);
const yi = ref(0);

// 记录当前正在更新的字段，避免无限循环
let updatingField = '';

/* 计算函数 */
const calculateFromNumber = (value: number) => {
  if (updatingField === 'number') return;

  updatingField = 'number';
  billion.value = divide(value, 1000000000);
  million.value = divide(value, 1000000);
  thousand.value = divide(value, 1000);
  wan.value = divide(value, 10000);
  yi.value = divide(value, 100000000);
  updatingField = '';
};

const calculateFromBillion = (value: number) => {
  if (updatingField === 'billion') return;

  const num = times(value, 1000000000);
  updatingField = 'billion';
  number.value = num;
  million.value = times(value, 1000);
  thousand.value = times(value, 1000000);
  wan.value = times(value, 100000);
  yi.value = times(value, 10);
  updatingField = '';
};

const calculateFromMillion = (value: number) => {
  if (updatingField === 'million') return;

  const num = times(value, 1000000);
  updatingField = 'million';
  number.value = num;
  billion.value = divide(value, 1000);
  thousand.value = times(value, 1000);
  wan.value = times(value, 100);
  yi.value = divide(value, 100);
  updatingField = '';
};

const calculateFromThousand = (value: number) => {
  if (updatingField === 'thousand') return;

  const num = times(value, 1000);
  updatingField = 'thousand';
  number.value = num;
  billion.value = divide(value, 1000000);
  million.value = divide(value, 1000);
  wan.value = divide(value, 10);
  yi.value = divide(value, 100000);
  updatingField = '';
};

const calculateFromWan = (value: number) => {
  if (updatingField === 'wan') return;

  const num = times(value, 10000);
  updatingField = 'wan';
  number.value = num;
  billion.value = divide(value, 100000);
  million.value = divide(value, 100);
  thousand.value = times(value, 10);
  yi.value = divide(value, 10000);
  updatingField = '';
};

const calculateFromYi = (value: number) => {
  if (updatingField === 'yi') return;

  const num = times(value, 100000000);
  updatingField = 'yi';
  number.value = num;
  billion.value = times(value, 10);
  million.value = times(value, 10000);
  thousand.value = times(value, 100000);
  wan.value = times(value, 10000);
  updatingField = '';
};

// 监听各个输入框的变化
watch(number, (newValue) => {
  if (newValue !== null && newValue !== undefined && !Number.isNaN(newValue)) {
    calculateFromNumber(newValue);
  }
});

watch(billion, (newValue) => {
  if (newValue !== null && newValue !== undefined && !Number.isNaN(newValue)) {
    calculateFromBillion(newValue);
  }
});

watch(million, (newValue) => {
  if (newValue !== null && newValue !== undefined && !Number.isNaN(newValue)) {
    calculateFromMillion(newValue);
  }
});

watch(thousand, (newValue) => {
  if (newValue !== null && newValue !== undefined && !Number.isNaN(newValue)) {
    calculateFromThousand(newValue);
  }
});

watch(wan, (newValue) => {
  if (newValue !== null && newValue !== undefined && !Number.isNaN(newValue)) {
    calculateFromWan(newValue);
  }
});

watch(yi, (newValue) => {
  if (newValue !== null && newValue !== undefined && !Number.isNaN(newValue)) {
    calculateFromYi(newValue);
  }
});
</script>

<template>
  <!-- 原始数字 -->
  <div class="input-warp">
    <ValueInput
      v-model:value="number"
      input-class="center width-240"
      type="number"
      placeholder="请输入数字"
    />
  </div>

  <!-- Billion -->
  <div class="input-warp">
    <ValueInput
      v-model:value="billion"
      input-class="center width-100"
      type="number"
      placeholder="0"
    />
    <div class="suffixes">
      B (billion)
    </div>
  </div>

  <!-- Million -->
  <div class="input-warp">
    <ValueInput
      v-model:value="million"
      input-class="center width-100"
      type="number"
      placeholder="0"
    />
    <div class="suffixes">
      M (million)
    </div>
  </div>

  <!-- Thousand -->
  <div class="input-warp">
    <ValueInput
      v-model:value="thousand"
      input-class="center width-100"
      type="number"
      placeholder="0"
    />
    <div class="suffixes">
      K (thousand)
    </div>
  </div>

  <!-- Wan -->
  <div class="input-warp">
    <ValueInput
      v-model:value="wan"
      input-class="center width-100"
      type="number"
      placeholder="0"
    />
    <div class="suffixes">
      万
    </div>
  </div>

  <!-- Yi -->
  <div class="input-warp">
    <ValueInput
      v-model:value="yi"
      input-class="center width-100"
      type="number"
      placeholder="0"
    />
    <div class="suffixes">
      亿
    </div>
  </div>
</template>

<style scoped>
.input-warp{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
}

.suffixes{
  width: 140px;
}
</style>
