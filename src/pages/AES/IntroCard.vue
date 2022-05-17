<script setup lang="ts">
</script>

<template>
  <ContentCard>
    <h2>简介</h2>
    <p>AES是一种 <b>对称加密算法</b> 。</p>
    <br>

    <h2>安全强度</h2>
    <table>
      <thead>
        <tr>
          <th>算法</th>
          <th>安全强度</th>
          <th>安全性</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AES-128</td>
          <td>128</td>
          <td class="safe">
            安全
          </td>
        </tr>
        <tr>
          <td>AES-192</td>
          <td>192</td>
          <td class="safe">
            安全
          </td>
        </tr>
        <tr>
          <td>AES-256</td>
          <td>256</td>
          <td class="safe">
            安全
          </td>
        </tr>
      </tbody>
    </table>
  </ContentCard>
</template>

<style scoped>
</style>
