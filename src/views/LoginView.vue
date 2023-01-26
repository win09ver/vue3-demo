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
					<!-- sign in -->
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
					<!-- sign up -->
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
import { useRouter } from 'vue-router'
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { link, url } from '@/request'
import { TabsPaneContext } from 'element-plus/es/tokens/tabs'
import { ElMessage, FormInstance } from 'element-plus'

export default defineComponent({
  name: "LoginView",
  components: { 
		MyBtn,
	},
	setup () {
		const ruleFormRef = ref<FormInstance>()
		const activeName = ref('signin')
		const router = useRouter()
		const submitBtnData = reactive({
			type: "success",
			name: "Submit",
			plain: false,
			disabled: false,
			icon: Star // icon 要import
		})
		const resetBtnData = reactive({
			name: "Reset",
			plain: true,
			disabled: false,
			icon: Edit // icon 要import
		})
		const signUpBtnData = reactive({
			type: "success",
			name: "Sign Up",
			plain: false,
			icon: Star // icon 要import
		})
		const data = reactive<LoginForm>({
			ruleForm: {
				// sign in
				username: "",
				password: "", // frontで暗号化するのかそれでもbackで暗号化するのかを要検討
				// sign up
				mail: "",
				signUpUsername: "",
				signUpPassword:"" // frontで暗号化するのかそれでもbackで暗号化するのかを要検討
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

		// btn event
		const onClick = async (name:string) => {
			// sign in event
			if (activeName.value === "signin") {
				// reset
				if (name === resetBtnData.name) {
					data.ruleForm.username = ""
					data.ruleForm.password = ""
					return
				}
				// validateのパラメータ 1:valide:boolean, fields:err fields
				ruleFormRef.value?.validate(async (_, fields) => {
					// errあったら、fieldsにものが出る。signinの場合、usernameとpasswordしか関心しない
					if (fields?.username || fields?.password) {
						ElMessage.error("validation err")
						return
					} else {
						const resp = await link(url.one, "GET")
						console.log("resp", resp)
						router.push('/home')
					}
				})
			// sign up event
			} else if (activeName.value === "signup") {
				const {signUpUsername, signUpPassword, mail} = data.ruleForm
				ruleFormRef.value?.validate(async (_, fields) => {
					if (fields?.signUpUsername || fields?.signUpPassword || fields?.mail) {
						ElMessage.error("validation err")
						return
					} else {
						// 将来型をDTOに変換すべき
						const result: any = await link(url.register, "POST", {signUpUsername, signUpPassword, mail})
						if (Object.keys(result).length > 0) {
							ElMessage.success("sign up scccessfully")
							activeName.value = "signin"
							data.ruleForm.username = signUpUsername
							data.ruleForm.signUpUsername = ""
							data.ruleForm.signUpPassword = ""
							data.ruleForm.mail = ""
						}
					}
				})
			}
		}

		const tabClick = (tab: TabsPaneContext, event: Event) => {
			console.log(tab, event)
		}

		return {
			...toRefs(data),
			ruleFormRef,
			onClick,
			tabClick,
			submitBtnData,
			signUpBtnData,
			resetBtnData,
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