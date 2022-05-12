<script setup lang="ts">
import { ref } from 'vue';
import { JSEncrypt } from 'jsencrypt';
import CryptoJS from 'crypto-js';
import { HashFun } from '../../types/type';

const privkey = ref('');
const input = ref('');
const output = ref('');

/* 签名 */
const onSign = () => {
  output.value = '签名中...';

  const encrypt = new JSEncrypt();
  encrypt.setPrivateKey(privkey.value);
  const sign = encrypt.sign(input.value, CryptoJS.SHA256 as unknown as HashFun, 'sha256');

  if (!sign) {
    output.value = '签名失败';
    return;
  }
  output.value = sign as string;
};

</script>

<template>
  <TextInput
    v-model:text.lazy="privkey"
    text-area-class="min-height-10"
    placeholder="私钥"
  />
  <TextInput
    v-model:text.lazy="input"
    placeholder="内容"
  />
  <TextInput
    v-if="!!output"
    placeholder="签名"
    :text="output"
    readonly
  />
  <div class="button-warp">
    <ConfirmButton
      text="签名"
      :disable="input==='' || privkey===''"
      @click="onSign"
    />
  </div>
</template>

<style scoped>
.button-warp{
  display: flex;
  justify-content: flex-end;
}

</style>
