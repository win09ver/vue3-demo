<template>
  <div v-if="value">
    <qrcode-vue :value="value" :size="size" :level="level" :margin="margin"/>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import QrcodeVue from 'qrcode.vue'
import { Level } from '@/type/common';

export default defineComponent ({
  name: 'QRcode',
  components: {
    QrcodeVue
  },
  props: {
    value: {
      type: String,
    },
    size: {
      type: Number,
      default: 300
    },
    level: {
      type: String as PropType<Level>,
      default: () => "H"
    },
    margin: {
      type: Number,
      default: 1
    }
  },
  setup() {
    return {
    }
  }
})
</script>
<style lang='scss' scoped>
</style>