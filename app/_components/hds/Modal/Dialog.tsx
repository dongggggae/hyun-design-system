'use client';
import classNames from '@utils/classNames';

import { useModalModify } from './ModalContext';

const Dialog: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const PREFIX = 'modal__dialog';
  const { size, type } = useModalModify();

  return (
    <div className={classNames(PREFIX, size && `${PREFIX}--${size}`, type && `${PREFIX}--${type}`)}>{children}</div>
  );
};
export default Dialog;
