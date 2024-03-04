import React from 'react';
import classNames from '@utils/classNames';

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classNames('modal__body')}>{children}</div>;
};

export default Body;
