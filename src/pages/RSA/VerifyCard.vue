<script setup lang="ts">
import { ref } from 'vue';
import { JSEncrypt } from 'jsencrypt';
import CryptoJS from 'crypto-js';
import { HashFun } from '../../types/type';
import message from '../../components/message';

const pubkey = ref('');
const input = ref('');
const output = ref('');
// 校验结果（以CSS className命名，用于显示样式）
const result = ref('');

/* 校验 */
const onVerify = () => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(pubkey.value);
  const verify = encrypt.verify(input.value, output.value, CryptoJS.SHA256 as unknown as HashFun);

  // 正确
  if (verify) {
    message('校验结果正确');
    result.value = 'success';
    return;
  }

  // 错误
  message('校验结果错误');
  result.value = 'failed';
};

</script>

<template>
  <TextInput
    v-model:text.lazy="pubkey"
    text-area-class="min-height-10"
    placeholder="公钥"
  />
  <TextInput
    v-model:text.lazy="input"
    :text-area-class="result"
    placeholder="内容"
  />
  <TextInput
    v-model:text.lazy="output"
    :text-area-class="result"
    placeholder="签名"
  />
  <div class="button-warp">
    <ConfirmButton
      text="校验"
      :disable="pubkey==='' || input==='' || output===''"
      @click="onVerify"
    />
  </div>
</template>

<style scoped>
.button-warp{
  display: flex;
  justify-content: flex-end;
}

</style>
