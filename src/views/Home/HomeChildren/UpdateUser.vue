<template>
  <div>UpdateUser</div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, PropType } from 'vue'
export default defineComponent ({
  name: 'UpdateUser',
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