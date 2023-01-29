<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="auto">
                <left-side/>
            </el-aside>
            <el-container>
                <el-header>
                    <rigth-top/>
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
import LeftSide from '@/components/L4/LeftSide.vue'
import RigthTop from '@/components/L4/RigthTop.vue'

export default defineComponent ({
  name: 'HomeView',
  components: {
    LeftSide,
    RigthTop,
  },
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
.el-aside {
    background-color: #545c64;
}
.el-header {
    width: 100%;
}
.el-main {
    background-color: gainsboro;
    width: 100%;
}
.el-aside, .el-container, .common-layout, #app, body, html {
    height: 100%;
}

</style>