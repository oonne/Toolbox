<script setup lang="ts">
</script>

<template>
  <ContentCard>
    <h2>简介</h2>
    <p>第二代安全散列算法。</p>
    <br>

    <h2>安全强度</h2>
    <table>
      <thead>
        <tr>
          <th>单向散列函数</th>
          <th>安全强度</th>
          <th>安全性</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SHA-224</td>
          <td>112</td>
          <td class="danger">
            不安全
          </td>
        </tr>
        <tr>
          <td>SHA-256</td>
          <td>128</td>
          <td class="warning">
            安全
          </td>
        </tr>
        <tr>
          <td>SHA-384</td>
          <td>192</td>
          <td class="safe">
            安全
          </td>
        </tr>
        <tr>
          <td>SHA-512</td>
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
