import React from 'react';

import classNames from '@utils/classNames';

const TabCotent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const PREFIX = 'tab__content';

  return <div className={classNames(PREFIX)}>{children}</div>;
};

export default TabCotent;
