<script setup lang="ts">
import { ref } from 'vue';
import { JSEncrypt } from 'jsencrypt';

const pubkey = ref('');
const input = ref('');
const output = ref('');

/* 解码 */
const onDecode = () => {
  output.value = '加密中...';

  const decrypt = new JSEncrypt();
  decrypt.setPublicKey(pubkey.value);
  const uncrypted = decrypt.encrypt(input.value);

  if (!uncrypted) {
    output.value = '加密失败';
    return;
  }
  output.value = uncrypted as string;
};

</script>

<template>
  <TextInput
    v-model:text.lazy="pubkey"
    min-height="10rem"
    placeholder="公钥"
  />
  <TextInput
    v-model:text.lazy="input"
    placeholder="明文"
  />
  <TextInput
    v-if="!!output"
    placeholder="密文"
    :text="output"
    readonly
  />
  <div class="button-warp">
    <ConfirmButton
      text="加密"
      :disable="input==='' || pubkey===''"
      @click="onDecode"
    />
  </div>
</template>

<style scoped>
.button-warp{
  display: flex;
  justify-content: flex-end;
}

</style>
