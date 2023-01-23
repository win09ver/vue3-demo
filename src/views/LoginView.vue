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
				<el-tabs v-model="activeName" type="card" @tab-click="tabClick" class="demo-tabs">
					<el-tab-pane label="Sign In" name="signin">
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
					</el-tab-pane>

					<el-tab-pane label="Sign Up" name="signup">
						<el-form-item label="UserName" prop="signUpUsername">
							<el-input v-model="ruleForm.signUpUsername" autocomplete="off" />
						</el-form-item>
						<el-form-item label="Email" prop="mail">
							<el-input v-model="ruleForm.mail" autocomplete="off" />
						</el-form-item>
						<el-form-item label="Password" prop="signUpPassword">
							<el-input
									v-model="ruleForm.signUpPassword"
									type="password"
									autocomplete="off"
							/>
						</el-form-item>
						<el-form-item class="demo-btn-group">
							<my-btn :type="signUpBtnData.type" :plain="signUpBtnData.plain" :name="signUpBtnData.name" :icon="signUpBtnData.icon" @onClick="onClick">Submit</my-btn>
						</el-form-item>
					</el-tab-pane>
				</el-tabs>
			</el-form>
	</div>
</template>

<script lang="ts">
import MyBtn from '@/components/L1/MyBtn.vue'
import { LoginForm, UserInfo } from '@/type/login'
import { passwordRule, userNameRule } from '@/utils/verfifcation'
import {
  Star,
  Edit,
} from '@element-plus/icons-vue'

import { defineComponent, reactive, ref, toRefs } from 'vue'
import { Method } from '@babel/types'
import { link, url } from '@/request'
import { TabsPaneContext } from 'element-plus/es/tokens/tabs'

export default defineComponent({
  components: { MyBtn },
	setup () {
		const activeName = ref('signin')
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
		const signUpBtnData = reactive({
			type: "success",
			name: "Sign Up",
			plain: false,
			icon: Star as unknown as string// icon 要import
		})
		const data = reactive<LoginForm>({
			ruleForm: {
				// sign in
				username: "",
				password: "",
				// sign up
				mail: "",
				signUpUsername: "",
				signUpPassword:""
			},
			rules: {
				username: userNameRule,
				password: passwordRule,
				signUpUsername: userNameRule,
				signUpPassword: passwordRule,
				mail: [
					{
						required: true,
						message: "Please input messages",
						trigger: "blur"
					},
				],
			}
		})

		const resetForm = (data: UserInfo) => {
			data.password = ""
			data.username = ""
		}

		const onClick = async (name:string, event: Event) => {
			console.log("event", name, event)
			console.log("data", data)
			const resp = await link(url.one, "GET")
			console.log("resp", resp)
		}

		const tabClick = (tab: TabsPaneContext, event: Event) => {
			console.log(tab, event)
		}

		return {
			...toRefs(data),
			onClick,
			tabClick,
			submitBtnData,
			signUpBtnData,
			resetBtnData,
			resetForm,
			activeName
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
		width: 50%;
		max-width: 600px;
		margin: 200px auto;
		background-color: white;
		padding: 35px;
		border-radius: 40px;
	}
	

	.demo-btn-group {
		display: inline-block;
	}
	h2 {
		margin-bottom: 20px;
	}
}


.demo-tabs ::v-deep(.el-tabs__content) {
	padding-left: 20px;
	color: #6b778c;
	font-size: 32px;
	font-weight: 600;
}
</style>