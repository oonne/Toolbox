<script setup lang="ts">
import { ref } from 'vue';
import { JSEncrypt } from 'jsencrypt';

const privkey = ref('');
const input = ref('');
const output = ref('');

/* 解码 */
const onDecode = () => {
  // JSEncrypt.
  output.value = '解密中...';

  const decrypt = new JSEncrypt();
  decrypt.setPrivateKey(privkey.value);
  const uncrypted = decrypt.decrypt(input.value);

  if (!uncrypted) {
    output.value = '解密失败';
  }
  output.value = uncrypted as string;
};

</script>

<template>
  <TextInput
    v-model:text="privkey"
    input-style="{{minHeight: '10rem'}}"
    placeholder="私钥"
  />
  <TextInput
    v-model:text="input"
    placeholder="密文"
  />
  <TextInput
    v-if="!!output"
    placeholder="明文"
    :text="output"
    readonly
  />
  <div class="button-warp">
    <ConfirmButton
      text="解密"
      :disable="input==='' || privkey===''"
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
