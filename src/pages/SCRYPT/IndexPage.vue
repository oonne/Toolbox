<template>
  <HeaderBar title="SCRYPT 秘钥派生函数" />

  <!-- 功能 -->
  <ContentCard>
    <CalcCard />
  </ContentCard>

  <!-- 简介 -->
  <IntroCard />
</template>

<script setup lang="ts">
import IntroCard from './IntroCard.vue';
import CalcCard from './CalcCard.vue';
</script>

<style scoped>
</style>
