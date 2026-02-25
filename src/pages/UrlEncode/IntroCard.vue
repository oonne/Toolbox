<template>
  <ContentCard>
    <h2>简介</h2>
    <p>URL 编码（百分号编码）用于将 <b>特殊字符</b> 转为 <b>安全传输格式</b>，常用于查询参数、表单提交等场景。</p>
    <br>

    <h2>参考文献</h2>
    <ul>
      <li
        v-for="link in refer"
        :key="link.href"
      >
        <a
          :href="link.href"
          target="_blank"
        >{{ link.text }}</a>
      </li>
    </ul>
  </ContentCard>
</template>

<script setup lang="ts">
import type { Link } from '@/types/type';

const refer: Link[] = [
  {
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    text: 'MDN文档',
  },
];
</script>

<style scoped>
</style>
