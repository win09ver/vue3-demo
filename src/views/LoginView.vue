<template>
	<div class="login-box" >
		<el-form
			ref="ruleFormRef"
			:model="ruleForm"
			status-icon
			:rules="rules"
			label-width="80px"
			class="demo-ruleForm"
		>
		<h2>管理システム</h2>
			<el-form-item label="LoginId" prop="username">
				<el-input v-model="ruleForm.username" autocomplete="off" />
			</el-form-item>
			<el-form-item label="Password" prop="password">
				<el-input
						v-model="ruleForm.password"
						type="password"
						autocomplete="off"
				/>
			</el-form-item>
			<el-form-item>
				<my-btn :type="btnData.type" :plain="btnData.plain" :name="btnData.name" :icon="btnData.icon" @onClick="onClick">Submit</my-btn>
				<el-button @click="resetForm(ruleForm)">Reset</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import MyBtn from '@/components/L1/MyBtn.vue'
import { LoginForm, UserInfo } from '@/type/login'
import { FormInstance } from 'element-plus'
import {
  Star,
} from '@element-plus/icons-vue'

import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  components: { MyBtn },
	setup () {
		const btnData = reactive({
			type: "success",
			name: "Submit",
			plain: false,
			icon: Star // icon 要import
		})
		const data = reactive<LoginForm>({
			ruleForm: {
				username: "",
				password: ""
			},
			rules: {
				username: [
					{
						required: true,
						message: "Please input messages",
						trigger: "blur"
					},
					{
						min: 3,
						max: 6,
						message: "Length should be 3-6",
						trigger: "blur"
					}
				],
				password: [
					{
						required: true,
						message: "Please input password",
						trigger: "blur"
					},
					{
						min: 3,
						max: 10,
						message: "Length should be 3-10",
						trigger: "blur"
					}
				]
			}
		})
		const resetForm = (data: UserInfo) => {
			data.password = ""
			data.username = ""
		}

		const onClick = (name:string, event: any) => {
			console.log("event", name, event)
		}

		return {
			...toRefs(data),
			onClick,
			btnData,
			resetForm
		}
	}
})
</script>

<style lang='scss' scoped>
.login-box {
	width: 100%;
	height: 100%;
	padding: 1px;
	background: url("../assets/bg.jpg");
	text-align: center;
	.demo-ruleForm {
		width: 500px;
		margin: 200px auto;
		background-color: white;
		padding: 30px;
		border-radius: 40px;
	}
	h2 {
		margin-bottom: 2px;
	}
}
</style>