<script setup lang="ts">
</script>

<template>
  <header>
    <router-link
      class="logo"
      :to="{name: 'Index'}"
    >
      工具箱
    </router-link>
  </header>
</template>

<style scoped>
header{
  padding: 16px 32px;
  background-color: #111;
}
.logo{
  font-family: 'MFQiHei';
  font-size: 2rem;
  color: var(--color);
  text-decoration: none;
}
</style>
