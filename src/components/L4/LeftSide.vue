<template>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active=""
      text-color="#fff"
      :collapse="!$store.state.HomeModule.navBool"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(el) in leftNavData" :key="el.path">
        <!-- with pull down-->
        <el-sub-menu :index="el.path" v-if="el.children">
          <template #title>
            <el-icon><component :is="el.meta.icon"></component></el-icon>
            <span>{{el.meta.title}}</span>
          </template>
          <el-menu-item-group v-for="(childEl) in el.children" :key="childEl.path">
            <el-menu-item v-if="el.children" :index="childEl.path">{{childEl.meta.title}}</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <!-- no pull down-->
        <el-menu-item :index="el.path" v-else>
          <el-icon><component :is="el.meta.icon"></component></el-icon>
          <span>{{el.meta.title}}</span>
        </el-menu-item>
      </template>
  </el-menu>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import {
  Location,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { KeyValObj } from '../../type/common'
import { HOME_VIEW } from '@/router'
export default defineComponent ({
  name: 'LeftSide',
  components: {
    Location,
    IconMenu,
    Setting,
  },
  props: {},
  emits: ['onClick'],
  setup() {
    const router = useRouter()
    console.log("router", router)
    const dataSource: KeyValObj[] | undefined = router.options.routes.find(el => el.name === HOME_VIEW)?.children
    const leftNavData = ref<KeyValObj[] | undefined>(dataSource)
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    return {
      leftNavData,
      handleOpen,
      handleClose
    }
  }
})
</script>
<style lang='scss' scoped>
</style>