<template>
	<el-button 
  :type="type" 
  :plain="plain" 
  :icon="icon"
  :disabled="disabled"
  @click="onClick($event)">
    {{name}}
  </el-button>
</template>

<script lang='ts'>

import { defineComponent, PropType, Component } from 'vue'
export default defineComponent ({
  name: 'MyBtn',
  components: {},
  props: {
    name: String,
    type: { 
      type: String,
      default: "primary"
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Object as PropType<Component>,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    callback: {
      type: Function as PropType<() => void>
    },
    // book: {
    //   type: Object as PropType<Book>,
    //   required: true
    // },
  },
  setup(props, ctx) {
    const onClick = (event: Event) => {
      ctx.emit("onClick", props.name, event)
    }
    return {
       onClick,
    }
  }
})
</script>
<style lang='scss' scoped>
</style>