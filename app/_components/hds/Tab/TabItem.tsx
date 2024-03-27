import React from 'react';

import classNames from '@utils/classNames';

const TabItem: React.FC<{ children: React.ReactNode }> = ({ children, title }) => {
  const PREFIX = 'tab__Item';

  return (
    <li className={classNames(PREFIX)} title={title}>
      {children}
    </li>
  );
};

export default TabItem;
