'use client';
import { useModalModify } from './ModalContext';
import classNames from '@utils/classNames';

const Dialog: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const PREFIX = 'modal__dialog';
  const { size, type } = useModalModify();

  return (
    <div className={classNames(PREFIX, size && `${PREFIX}--${size}`, type && `${PREFIX}--${type}`)}>{children}</div>
  );
};
export default Dialog;
