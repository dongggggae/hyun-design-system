import React from 'react';
import classNames from '@utils/classNames';

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classNames('modal__content')}>{children}</div>;
};

export default Content;
