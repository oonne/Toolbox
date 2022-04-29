<script setup lang="ts">
import { ref, computed } from 'vue';
import categorys from '../../constant/category';
import features from '../../constant/features';

/* 分类 */
const active = ref('All');
const SetCategory = (en: string) => {
  active.value = en;
};

/* 功能 */
const featuresList = computed(() => features.filter((f) => f.category.includes(active.value)));

</script>

<template>
  <div class="index">
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
        <li
          v-for="item in featuresList"
          :key="item.name"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.index{
  margin: auto;
  padding-top: 16vh;
  max-width: 768px;
}

.logo{
  font-family: 'MFQiHei';
  font-size: 80px;
  text-align: center;
  margin-bottom: 28px;
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
  padding: 16px;
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
  .index{
    padding-top: 48px;
  }
}

</style>
