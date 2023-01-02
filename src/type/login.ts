export interface RuleForm {
    username: string
    password: string
}

export interface LoginForm {
    ruleForm: RuleForm
    rules: any
}
