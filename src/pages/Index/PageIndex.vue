<script setup lang="ts">
import { ref } from 'vue';
import categorys from '../../constant/category';

/* 分类 */
const active = ref('All');
const SetCategory = (en: string) => {
  active.value = en;
};

</script>

<template>
  <div class="index">
    <div class="logo">
      工具箱
    </div>

    <ul class="category">
      <li
        v-for="category in categorys"
        :key="category.en"
        class="category-item"
        :class="category.en===active ? 'active' : ''"
        @click="SetCategory(category.en)"
      >
        {{ category.cn }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo{
  font-family: 'MFQiHei';
  font-size: 80px;
  text-align: center;
}

.category-item{
  list-style: none;
}
.category-item.active{
}

/* 小屏 */
@media screen and (max-width: 800px) {
}

</style>
