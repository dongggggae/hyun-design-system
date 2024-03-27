import React from 'react';

import classNames from '@utils/classNames';

interface TabProps {
  children: React.ReactNode;
}

const TabContainer: React.FC<TabProps> = ({ children }) => {
  const PREFIX = 'tab__wrap';

  return <div className={classNames(PREFIX)}>{children}</div>;
};

export default TabContainer;
