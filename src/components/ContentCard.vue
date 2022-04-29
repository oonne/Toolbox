<script setup lang="ts">
</script>

<template>
  <div class="content-card">
    <slot />
  </div>
</template>

<style scoped>
.content-card{
  max-width: var(--content-max-width);
  background:  var(--content-background);
  margin: 16px auto;
  padding: 16px 24px;
}

/* 简介内容 */
.content-card:deep() h2{
  font-weight: normal;
  font-size: 1.4rem;
}
.content-card:deep() a{
  color: var(--color);
}
.content-card:deep() ul {
  margin-left: 0;
  padding-left: 1.2rem;
}
</style>
