import React from 'react';

import classNames from '@utils/classNames';

const TabPanel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const PREFIX = 'tab__panel';

  return <div className={classNames(PREFIX)}>{children}</div>;
};

export default TabPanel;
