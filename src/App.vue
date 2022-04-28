<script setup lang="ts">
</script>

<template>
  <div class="page">
    <router-view />
  </div>

  <!-- 底部版权及备案号 -->
  <footer>
    <a
      href="https://beian.miit.gov.cn/"
      target="_blank"
    >粤ICP备11053055</a>
    <span>&copy;</span>
    <a
      href="https://blog.oonne.com"
      target="_blank"
    >JAY</a>
  </footer>
</template>

<style>
@import './assets/css/font.css';
@import './assets/css/reset.css';

#app {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.page{
  padding-bottom: 96px;
}

footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 48px;
  text-align: center;
}
footer a{
  color: var(--color);
  text-decoration: none;
  margin: 0px 24px 0 8px;
}
</style>
