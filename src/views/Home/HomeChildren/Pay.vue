<template>
  <div class="content">Pay
    <div class="inputdom">
      <el-input v-model="input" placeholder="Please input amount" />
      <p style="color: red;" v-if="isShowErr"> please input something </p>
      <my-btn type="success" name="generate QRcode" @click="onClick"/>
    </div>
    <div class="qrcode">
      <QRcode :value="qrValue" />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import MyBtn from '@/components/L1/MyBtn.vue'
import QRcode from '@/components/L1/QRcode.vue'
export default defineComponent ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pay',
  components: {
    MyBtn,
    QRcode,
  },
  setup() {
    const input = ref<string>("")
    const isShowErr = ref<boolean>(false)
    const qrValue = ref<string | undefined>("")
    const onClick = () => {
      if (!input.value) {
        isShowErr.value = true
      } else {
        isShowErr.value = false
      }
      qrValue.value = input.value
    }
    return {
      input,
      isShowErr,
      qrValue,
      onClick
    }
  }
})
</script>
<style lang='scss' scoped>
.qrcode {
  width: 300px;
  margin: 0 auto;
  height: 300px;
}
</style>