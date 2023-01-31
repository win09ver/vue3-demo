<template>
  <div class="item">
    <slot name="main"></slot>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent ({
  name: 'Item',
  components: {},
  setup(props, ctx) {

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
    background-color: rgb(98, 127, 129);
}
</style>