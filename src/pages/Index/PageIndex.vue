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
  <div class="page">
    <!-- 标题 -->
    <header class="logo">
      工具箱
    </header>

    <!-- 筛选 -->
    <div class="category-warp">
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

    <!-- 功能 -->
    <div class="feature-warp">
      <ul class="feature">
        <li>TODO</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.page{
  margin: auto;
  margin-top: 16vh;
  max-width: 768px;
}

.logo{
  font-family: 'MFQiHei';
  font-size: 80px;
  text-align: center;
  margin-bottom: 30px;
}

.category-warp{
  overflow: auto;
}
.category-warp::-webkit-scrollbar {
  display: none;
}
.category{
  display: flex;
  background-color: #333;
  width: 768px;
}
.category-item{
  list-style: none;
  padding: 16px 30px;
  width: 128px;
  cursor: pointer;
  text-align: center;
}
.category-item.active{
  background-color: #3f3f3f;
}

.feature-warp{
  background-color: #3f3f3f;
  padding: 30px;
}
.feature{
  height: 400px;
}

/* 小屏 */
@media screen and (max-width: 800px) {
}

</style>
