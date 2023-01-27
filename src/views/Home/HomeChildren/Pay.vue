<template>
  <div>Pay</div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, PropType } from 'vue'
export default defineComponent ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pay',
  components: {},
  props: {},
  emits: ['onClick'],
  setup(props, ctx) {
    console.log(ctx)
    console.log(props)
    const data = reactive({})
    const refData = toRefs(data);
    return {
       ...refData,
    }
  }
})
</script>
<style lang='scss' scoped>
</style>