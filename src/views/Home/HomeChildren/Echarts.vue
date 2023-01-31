<template>
  <div class="container">
    <div class="item-left">
      <Item>
        <template #main>
          <One/>
        </template>
      </Item>
      <Item>
        <template #main>
          <Two/>
        </template>
      </Item>
    </div>
    <div class="item-right">
      <Item>
        <template #main>
          <Three/>
        </template>
      </Item>
      <Item>
        <template #main>
          <Four/>
        </template>
      </Item>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, PropType } from 'vue'
import Item from '@/components/L2/Item.vue'
import One from '@/components/L1/charts/One.vue'
import Two from '@/components/L1/charts/Two.vue'
import Three from '@/components/L1/charts/Three.vue'
import Four from '@/components/L1/charts/Four.vue'

export default defineComponent ({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Echarts',
  components: {
    Item,
    One,
    Two,
    Three,
    Four
  },
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
.container {
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  background-color: rgb(161, 165, 165);
  .item-left, .item-right {
    flex: 1;
  }
}
</style>