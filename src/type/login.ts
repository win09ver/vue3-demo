import { FormRules } from "element-plus"

export interface UserInfo {
    username: string
    password: string
}

export interface LoginForm {
    ruleForm: UserInfo
    rules: FormRules
}
