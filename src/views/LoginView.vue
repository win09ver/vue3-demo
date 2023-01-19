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
			<el-form-item class="demo-btn-group">
				<my-btn :type="submitBtnData.type" :plain="submitBtnData.plain" :name="submitBtnData.name" :icon="submitBtnData.icon" @onClick="onClick">Submit</my-btn>
				<my-btn :plain="resetBtnData.plain" :name="resetBtnData.name" :icon="resetBtnData.icon" @onClick="onClick">Submit</my-btn>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import MyBtn from '@/components/L1/MyBtn.vue'
import { LoginForm, UserInfo } from '@/type/login'
import { UPPER_1LOWEER_1SPECIAL } from '@/utils/verfifcation'
import {
  Star,
	Edit,
} from '@element-plus/icons-vue'

import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  components: { MyBtn },
	setup () {
		const submitBtnData = reactive({
			type: "success",
			name: "Submit",
			plain: false,
			icon: Star as unknown as string// icon 要import
		})
		const resetBtnData = reactive({
			name: "Reset",
			plain: true,
			icon: Edit as unknown as string// icon 要import
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
						pattern: UPPER_1LOWEER_1SPECIAL,
						message: "at least one upper letter,one lower letter and 1 special char",
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
			console.log("data", data)
		}

		return {
			...toRefs(data),
			onClick,
			submitBtnData,
			resetBtnData,
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
	.demo-btn-group {
		display: inline-block;
	}
	h2 {
		margin-bottom: 2px;
	}
}
</style>