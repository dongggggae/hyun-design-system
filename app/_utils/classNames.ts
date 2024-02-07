/**
 * ClassName 생성 함수
 */
const classNames = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(' ');
};

export default classNames;
