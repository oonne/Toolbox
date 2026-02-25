<template>
  <HeaderBar title="URL 编码解码" />

  <!-- 功能 -->
  <TabsNav
    default="encode"
    :tabs="tabs"
  />

  <!-- 简介 -->
  <IntroCard />
</template>

<script setup lang="ts">
import type { Tab } from '@/types/type';
import IntroCard from './IntroCard.vue';
import DecodeCard from './DecodeCard.vue';
import EncodeCard from './EncodeCard.vue';

const tabs: Tab[] = [
  {
    key: 'encode',
    name: '编码',
    component: EncodeCard,
  },
  {
    key: 'decode',
    name: '解码',
    component: DecodeCard,
  },
];
</script>

<style scoped>
</style>
