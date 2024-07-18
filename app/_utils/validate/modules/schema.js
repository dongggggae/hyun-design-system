import * as yup from 'yup';

import { regExp } from '..';

export const schema = yup.object({
  username: yup
    .string()
    .matches(regExp.name, '이름은 한글 또는 영문만 입력 가능합니다.')
    .required('이름을 입력해주세요'),
  id: yup.string().matches(regExp.id, '아이디는 영문, 숫자, 언더스코어(-), 하이픈(-)만 사용할 수 있습니다.'),
  email: yup.string().matches(regExp.email, '유효한 이메일 주소를 입력해주세요.').required('이메일을 입력해주세요.'),
  password: yup.string().matches(regExp.password, messages.password).required('비밀번호를 입력해주세요.'),
  phone: yup
    .string()
    .matches(regExp.phone, '유효한 전화번호 형식을 입력해주세요. (예: 010-1234-5678)')
    .required('전화번호를 입력해주세요.'),
});
