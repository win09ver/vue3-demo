<template>
    <div class="icon">
        <el-icon v-if="$store.state.HomeModule.navBool" @click="onClick"><CaretRight /></el-icon>
        <el-icon v-else @click="onClick"><CaretLeft /></el-icon>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import {CaretLeft, CaretRight} from '@element-plus/icons-vue'
import { useStore } from 'vuex'
export default defineComponent ({
  name: 'RigthTop',
  components: {
    CaretLeft,
    CaretRight
  },
  setup() {
    const store = useStore()
    const onClick = () => {
        store.commit("setNavBool")
    }   
 
    return {
       onClick
    }
  }
})
</script>
<style lang='scss' scoped>
    .icon {
        line-height: 70px;
        .el-icon {
            font-size: 20px;
        }
    }

</style>