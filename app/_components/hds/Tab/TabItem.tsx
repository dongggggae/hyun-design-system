import React from 'react';

import classNames from '@utils/classNames';

interface TabItemProps {
  children: React.ReactNode;
  title: string;
}

const TabItem: React.FC<TabItemProps> = ({ children, title }) => {
  const PREFIX = 'tab__Item';

  return (
    <li className={classNames(PREFIX)} title={title}>
      {children}
    </li>
  );
};

export default TabItem;
