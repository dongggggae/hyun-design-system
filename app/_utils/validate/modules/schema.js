import * as yup from 'yup';

import { messages } from './messages';
import { regExp } from './regexp';

export const schema = yup.object({
  input: yup.string().required(messages.input('내용')).matches(regExp.mixed, '공백 없이 입력해주세요.'),
  name: yup.string().required(messages.input('이름')).matches(regExp.name, '이름은 한글 또는 영문만 입력 가능합니다.'),
  nameKo: yup.string().required(messages.input('이름')).matches(regExp.korean, messages.korean),
  nameEng: yup.string().required(messages.input('이름')).matches(regExp.english, messages.english),
  id: yup
    .string()
    .required(messages.input('아이디'))
    .matches(regExp.id, '아이디는 영문, 숫자, 언더스코어(_), 하이픈(-)만 사용할 수 있습니다.'),
  password: yup.string().required(messages.input('비밀번호')).matches(regExp.password, messages.password),
  passwordConfirm: yup
    .string()
    .required(messages.input('비밀번호'))
    .oneOf([yup.ref('password'), null], messages.confirmPassword),
  email: yup.string().required(messages.input('이메일')).matches(regExp.email, '유효한 이메일 주소를 입력해주세요.'),
  phone: yup
    .string()
    .required(messages.input('전화번호'))
    .matches(regExp.phone, '유효한 전화번호 형식을 입력해주세요. (예: 01012345678)'),
});
