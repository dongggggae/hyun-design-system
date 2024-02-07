import classNames from '@utils/classNames';
import React from 'react';

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className={classNames('main')}>{children}</main>;
};

export default Main;
