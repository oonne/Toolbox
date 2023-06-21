<script setup lang="ts">
import features from '../../constant/features';
</script>

<template>
  <div class="index">
    <!-- 标题 -->
    <header class="logo">
      加一工具箱
    </header>

    <!-- 功能 -->
    <div class="feature-warp">
      <router-link
        v-for="item in features"
        :key="item.name"
        :to="{ name: item.name }"
        class="feature-item"
      >
        {{ item.label }}
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.index{
  margin: auto;
  padding-top: 3rem;
  max-width: 1200px;
}

.logo{
  font-family: 'MFQiHei';
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
}
.feature-warp{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px;
  overflow: hidden;
}
.feature-item{
  display: block;
  margin: 10px;
  width: 120px;
  height: 90px;
  line-height: 90px;
  cursor: pointer;
  background: #4f4f4f;
  color: rgb(203, 197, 29);
  text-align: center;
  text-decoration: none;
}
.feature-item:hover{
  background-color: #555;
  color: rgb(203, 197, 100);
}

</style>
