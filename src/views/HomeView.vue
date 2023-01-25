<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent ({
  name: 'HomeView',
  components: {},
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
    background-color: pink;
}
.el-header {
    background-color: gold;
}
.el-main {
    background-color: burlywood;
}
.el-aside, .el-container, .common-layout, #app, body, html {
    height: 100%;
}

</style>