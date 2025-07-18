<script setup lang="ts">
import { ref } from 'vue';

const number = ref(0);
const billion = ref(0);
const million = ref(0);
const thousand = ref(0);
const wan = ref(0);
const yi = ref(0);

/* 计算 */
// const onCalc = () => {
// };
</script>

<template>
  <!-- 原始数字 -->
  <div class="input-warp">
    <ValueInput
      v-model:value="number"
      input-class="center width-240"
      type="number"
    />
  </div>

  <!-- Billion -->
  <div class="input-warp">
    <ValueInput
      v-model:value="billion"
      input-class="center width-100"
      type="number"
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
