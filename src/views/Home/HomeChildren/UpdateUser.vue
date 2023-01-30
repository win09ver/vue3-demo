<template>
  <div>
    <el-table
      :data="tableData.slice((currentPage - 1) * pageSize, pageSize * currentPage)"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        sortable
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
      <el-table-column prop="operation" label="operation">
        <template #default="scope">
          <div @click="handleEdit(scope.$index, scope.row)">
            <el-icon ><Edit /></el-icon>
          </div>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
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
    <div><router-view/></div>
  </div>
</template>

<script lang='ts'>
import { link, url } from '@/request'
import { Edit } from '@element-plus/icons-vue'
import { defineComponent, reactive, toRefs, PropType, onMounted, ref } from 'vue'
export default defineComponent ({
  name: 'UpdateUser',
  components: {
    Edit
  },
  props: {},
  emits: ['onClick'],
  setup(props, ctx) {
    const searchValue = ref("")
    const tableData = ref([])

    onMounted(() => {
      getAll()
    })

    const currentPage = ref(1)
    const pageSize = ref(10)
    const small = ref(false)
    const background = ref(false)
    const disabled = ref(false)
    
    const getAll = () => {
      link(url.userlist, "GET").then((data: any) => {
        console.log("data", data)
        tableData.value = data
      })
    }
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
    // 編集
    const handleEdit = (index: number, row: any) => {
      console.log(index, row)
    }
    // 削除
    const handleDelete = (index: number, row: any) => {
      console.log(index, row)
    }

    
    return {
       currentPage,
       background,
       small,
       disabled,
       pageSize,
       tableData,
       searchValue,
       Edit,
       handleEdit,
       handleDelete,
       handleSizeChange,
       handleCurrentChange
    }
  }
})
</script>
<style lang='scss' scoped>
</style>