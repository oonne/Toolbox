<script setup lang="ts">
import IntroCard from './IntroCard.vue';
import DecodeCard from './DecodeCard.vue';
import EncodeCard from './EncodeCard.vue';
import type { Tab } from '../../types/type';

const tabs: Tab[] = [
  {
    key: 'decode',
    name: '解码',
    component: DecodeCard,
  },
  {
    key: 'encode',
    name: '编码',
    component: EncodeCard,
  },
];
</script>

<template>
  <HeaderBar title="Base64编码解码" />

  <!-- 功能 -->
  <TabsNav
    default="decode"
    :tabs="tabs"
  />

  <!-- 简介 -->
  <IntroCard />
</template>

<style scoped>
</style>
