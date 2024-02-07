/**
 * ClassName 생성 함수
 */
const className = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(' ');
};

export default className;
