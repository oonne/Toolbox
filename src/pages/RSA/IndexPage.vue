<script setup lang="ts">
import IntroCard from './IntroCard.vue';
import GenerateKeyCard from './GenerateKeyCard.vue';
import DecryptCard from './DecryptCard.vue';
import EncryptCard from './EncryptCard.vue';
import type { Tab } from '../../types/type';

const tabs: Tab[] = [
  {
    key: 'generator',
    name: '生成秘钥对',
    component: GenerateKeyCard,
  },
  {
    key: 'decrypt',
    name: '解密',
    component: DecryptCard,
  },
  {
    key: 'encrypt',
    name: '加密',
    component: EncryptCard,
  },
];
</script>

<template>
  <HeaderBar title="RSA" />

  <!-- 功能 -->
  <TabsNav
    default="decrypt"
    :tabs="tabs"
  />

  <!-- 简介 -->
  <IntroCard />
</template>

<style scoped>
</style>
