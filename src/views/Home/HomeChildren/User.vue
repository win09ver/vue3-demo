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
        <template #header>
          <el-input
            v-model="searchValue"
            class="w-50 m-2"
            placeholder="Please Input"
            @blur="onBlur"
            :prefix-icon="Search"
          />
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
  </div>
</template>

<script lang='ts'>
import { link, url } from '@/request'
import { Search } from '@element-plus/icons-vue'
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent ({
  name: 'UserComponent',
  components: {
    // Search
  },
  props: {},
  emits: ['onClick'],
  setup() {
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
    // page????????????????????????
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
      pageSize.value = val
    }
    // ?????????page?????????????????????event
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
      // tableData.value.slice((currentPage.value - 1) * pageSize.value, pageSize.value)
      console.log("tableData",tableData)
      currentPage.value = val
    }
    // search input blur event
    const onBlur = () => {
      console.log("searchValue", searchValue.value)
      if (!searchValue.value) {
        getAll()
      } else {
        link(url.userlist, "GET", {}, {name: searchValue.value}).then((resp:any) => {
          console.log("resp", resp)
          tableData.value = resp
        })
      }
    }
    
    return {
       currentPage,
       background,
       small,
       disabled,
       pageSize,
       tableData,
       searchValue,
       Search,
       onBlur,
       handleSizeChange,
       handleCurrentChange
    }
  }
})
</script>
<style lang='scss' scoped>
</style>