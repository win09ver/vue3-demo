<template>
  <div>
    <router-view/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'UserInfo',
  components: {
  },
  props: {},
  emits: ['onClick'],
  setup(props, ctx) {
  
    
    return {
    }
  }
})
</script>
<style lang='scss' scoped>
</style>