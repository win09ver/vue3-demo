export const MAIL_VALIDATION = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/
// 1 special char  1 lower letter 1 upper letter
export const UPPER_1LOWEER_1SPECIAL = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

export const checkEmail = (inputedEmail: string) => {
  const reg = MAIL_VALIDATION
  return !reg.test(inputedEmail) ? true : false
}

export const checkPassword = (inputedPassWd: string) => {
  const reg = UPPER_1LOWEER_1SPECIAL
  return !reg.test(inputedPassWd) ? true : false
}

