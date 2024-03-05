import React from 'react';

import classNames from '@utils/classNames';

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className={classNames('main')}>{children}</main>;
};

export default Main;
