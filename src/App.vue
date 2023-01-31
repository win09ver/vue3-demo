<template>
  <router-view/>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import * as echarts from 'echarts'
import { provide } from 'vue'
export default defineComponent ({
  name: 'Two',
  components: {},
  emits: ['onClick'],
  setup() {
    provide("echarts", echarts)
    return {
    }
  }
})
</script>
<style lang="scss">
*{
  padding: 0px;
  margin: 0px;
}
html, body, #app {
  width: 100%;
  height: 100%;
}
</style>
