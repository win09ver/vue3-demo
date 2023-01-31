<template>
  <el-dialog v-model="isShow" :title="dialogData.title">
    <el-form :model="dialogData.form">
      <el-form-item label="title" :label-width="formLabelWidth">
        <el-input v-model="titleInputed" autocomplete="off" />
      </el-form-item>
      <el-form-item label="name" :label-width="formLabelWidth">
        <el-input v-model="nameInputed" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('changeShow', false, 'cancel')">Cancel</el-button>
        <el-button type="primary" @click="$emit('changeShow', false, 'confirm', dialogData.index)">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue'
import { UpdateUserDialogData } from '@/type/dialogs'

export default defineComponent ({
  name: 'UpdateUserDialog',
  components: {},
  props: {
    dialogData: {
      type: Object as PropType<UpdateUserDialogData>,
    }
  },
  setup(props, ctx) {
    const formLabelWidth = '140px'
    // const titleInputed = ref<string>(props.dialogData?.form.title || "")
    const titleInputed = computed({
      get: () => props.dialogData?.form.title,
      set: (value) => ctx.emit('setValue', value, "title")
    })
    const nameInputed = computed({
      get: () => props.dialogData?.form.name,
      set: (value) => ctx.emit('setValue', value, "name")
    })

    const isShow = computed(
      {
        get: () => props.dialogData?.isShow,
        set: (value) => ctx.emit('changeShow', value)
      }
    )

    return {
       formLabelWidth,
       isShow,
       titleInputed,
       nameInputed
    }
  }
})
</script>
<style lang='scss' scoped>
</style>