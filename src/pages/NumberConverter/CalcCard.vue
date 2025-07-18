<script setup lang="ts">
import { ref } from 'vue';
import { Cal } from '@/utils/index';

const { times, divide } = Cal;

const number = ref(0);
const billion = ref(0);
const million = ref(0);
const thousand = ref(0);
const wan = ref(0);
const yi = ref(0);

// 记录当前正在更新的字段，避免死循环
let isUpdating = false;

/**
 * 统一的计算函数
 * @param sourceField 触发计算的字段名
 * @param value 输入的值
 */
const calculateAll = (sourceField: string, value: number) => {
  if (isUpdating) return;

  isUpdating = true;

  let baseNumber: number;

  // 根据源字段计算基础数字
  switch (sourceField) {
    case 'number':
      baseNumber = value;
      break;
    case 'billion':
      baseNumber = times(value, 1000000000);
      break;
    case 'million':
      baseNumber = times(value, 1000000);
      break;
    case 'thousand':
      baseNumber = times(value, 1000);
      break;
    case 'wan':
      baseNumber = times(value, 10000);
      break;
    case 'yi':
      baseNumber = times(value, 100000000);
      break;
    default:
      isUpdating = false;
      return;
  }

  // 统一计算所有转换值
  number.value = baseNumber;
  billion.value = divide(baseNumber, 1000000000);
  million.value = divide(baseNumber, 1000000);
  thousand.value = divide(baseNumber, 1000);
  wan.value = divide(baseNumber, 10000);
  yi.value = divide(baseNumber, 100000000);

  isUpdating = false;
};

// 输入事件处理函数
const handleNumberInput = (value: number) => {
  if (!Number.isNaN(value)) {
    calculateAll('number', value);
  }
};

const handleBillionInput = (value: number) => {
  if (!Number.isNaN(value)) {
    calculateAll('billion', value);
  }
};

const handleMillionInput = (value: number) => {
  if (!Number.isNaN(value)) {
    calculateAll('million', value);
  }
};

const handleThousandInput = (value: number) => {
  if (!Number.isNaN(value)) {
    calculateAll('thousand', value);
  }
};

const handleWanInput = (value: number) => {
  if (!Number.isNaN(value)) {
    calculateAll('wan', value);
  }
};

const handleYiInput = (value: number) => {
  if (!Number.isNaN(value)) {
    calculateAll('yi', value);
  }
};
</script>

<template>
  <!-- 原始数字 -->
  <div class="input-warp">
    <ValueInput
      :value="number"
      input-class="center width-240"
      type="number"
      placeholder="请输入数字"
      @update:value="handleNumberInput"
    />
  </div>

  <!-- Billion -->
  <div class="input-warp">
    <ValueInput
      :value="billion"
      input-class="center width-100"
      type="number"
      placeholder="0"
      @update:value="handleBillionInput"
    />
    <div class="suffixes">
      B (billion)
    </div>
  </div>

  <!-- Million -->
  <div class="input-warp">
    <ValueInput
      :value="million"
      input-class="center width-100"
      type="number"
      placeholder="0"
      @update:value="handleMillionInput"
    />
    <div class="suffixes">
      M (million)
    </div>
  </div>

  <!-- Thousand -->
  <div class="input-warp">
    <ValueInput
      :value="thousand"
      input-class="center width-100"
      type="number"
      placeholder="0"
      @update:value="handleThousandInput"
    />
    <div class="suffixes">
      K (thousand)
    </div>
  </div>

  <!-- Wan -->
  <div class="input-warp">
    <ValueInput
      :value="wan"
      input-class="center width-100"
      type="number"
      placeholder="0"
      @update:value="handleWanInput"
    />
    <div class="suffixes">
      万
    </div>
  </div>

  <!-- Yi -->
  <div class="input-warp">
    <ValueInput
      :value="yi"
      input-class="center width-100"
      type="number"
      placeholder="0"
      @update:value="handleYiInput"
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
