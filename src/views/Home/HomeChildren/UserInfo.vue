<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pageSize, pageSize * currentPage)"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
      >
      </el-table-column>
      <el-table-column
        prop="title"
        label="title"
      >
      </el-table-column>
      <el-table-column
        prop="type"
        label="type">
      </el-table-column>
      <el-table-column
        prop="num"
        label="num">
      </el-table-column>
      <el-table-column
        prop="hometype"
        label="hometype">
      </el-table-column>
      <el-table-column
        prop="name"
        label="name">
      </el-table-column>
    </el-table>
    <!-- pagenation -->
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
  
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang='ts'>
import { link, url } from '@/request'
import { KeyValObj } from '@/type/common'
import { defineComponent, reactive, toRefs, PropType, ref, onMounted } from 'vue'
export default defineComponent ({
  name: 'UserInfo',
  components: {},
  props: {},
  emits: ['onClick'],
  setup(props, ctx) {
    
    const tableData = ref([])
    onMounted(() => {
      link(url.userlist, "GET").then((data: any) => {
        console.log("data", data)
        tableData.value = data
      })
    })


    const currentPage = ref(1)
    const pageSize = ref(15)
    const small = ref(false)
    const background = ref(false)
    const disabled = ref(false)
    


    // pageの表示件数を制御
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
      pageSize.value = val
    }
    // 現在のpageを指定した時のevent
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
      // tableData.value.slice((currentPage.value - 1) * pageSize.value, pageSize.value)
      console.log("tableData",tableData)
      currentPage.value = val
    }
    
    return {
       currentPage,
       background,
       small,
       disabled,
       pageSize,
       tableData,
       handleSizeChange,
       handleCurrentChange
    }
  }
})
</script>
<style lang='scss' scoped>
</style>