<template>
  <div class="item">
    <slot name="main"></slot>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'chart-item-slot',
  components: {},
  setup() {
    return {
    }
  }
})
</script>
<style lang='scss' scoped>
.item {
    height: 5.125rem;
    margin: 0.25rem;
    border: 1px, solid, grey;
    background-color: rgba(239, 246, 247, 0.747);
}
</style>