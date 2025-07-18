<script setup lang="ts">
import IntroCard from './IntroCard.vue';
import CalcCard from './CalcCard.vue';
</script>

<template>
  <HeaderBar title="中英文大数字转换" />

  <!-- 功能 -->
  <ContentCard>
    <CalcCard />
  </ContentCard>

  <!-- 简介 -->
  <IntroCard />
</template>

<style scoped>
</style>
