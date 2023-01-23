import { FormRules } from "element-plus"

export interface UserInfo {
    username: string
    password: string
    mail: string
    signUpUsername: string
	signUpPassword: string
}

export interface LoginForm {
    ruleForm: UserInfo
    rules: FormRules
}
