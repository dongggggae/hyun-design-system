'use client';
import React from 'react';

import classNames from '@utils/classNames';

import Tab from './Tab';
import { TabStateContext, TabModifyContext, useTabModify } from './TabContext';

interface TabProps {
  children: React.ReactNode;
  fill?: boolean;
  type?: 'pills' | 'inlines' | '';
}

const TabContainer: React.FC<TabProps> = ({ children, fill, type }) => {
  console.log({ fill });

  const PREFIX = 'tab__wrap';

  const tabModifyContext = {
    fill: fill || false,
    type: type || '',
  };

  return (
    <TabModifyContext.Provider value={tabModifyContext}>
      <div className={classNames(PREFIX)}>
        <Tab>{children}</Tab>
      </div>
    </TabModifyContext.Provider>
  );
};

export default TabContainer;
