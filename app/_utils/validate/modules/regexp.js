export const regExp = {
  name: /^[가-힣]*$|^[a-zA-Z]*$/,
  id: /^[a-zA-Z0-9_-]+$/,
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
  phone: /^(0\d{1,2})(\d{3,4})(\d{4})$|^$/,
  num: /^(?!0\d)\d*$|^$/,
  commasNum: /^[0-9,]+$|^$/,
  businessNum: /^(\d{3})-(\d{2})-(\d{5})$|^$/,
  mixed: /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ~!@#$%^&*()._-]+$/,
};