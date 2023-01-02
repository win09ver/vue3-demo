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
				<el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
				<el-button @click="resetForm(ruleForm)">Reset</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts">
import { LoginForm, RuleForm } from '@/type/login'
import { FormInstance } from 'element-plus'
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
	setup () {
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
		const resetForm = (data: RuleForm) => {
			data.password = ""
			data.username = ""
		}

		return {
			...toRefs(data),
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