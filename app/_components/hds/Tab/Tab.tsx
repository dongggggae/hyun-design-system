'use client';
import React from 'react';

import classNames from '@utils/classNames';

import TabCotent from './TabContent';
import { useTabModify } from './TabContext';
import TabItem from './TabItem';
import TabLink from './TabLink';
import TabPanel from './TabPanel';

interface TabProps {
  children: React.ReactNode;
  fill?: boolean;
  type?: 'pills' | 'inlines' | '';
  className?: string | string[];
}

const Tab: React.FC<TabProps> = ({ children, className }) => {
  const PREFIX = 'tab';

//   const { fill, type } = useTabModify();

  const renderTabItem = (child, index) => {
    if (React.isValidElement(child)) {
      const { title } = child.props;

      return (
        <TabItem key={index}>
          <TabLink title={title} />
        </TabItem>
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <ul
        className={classNames(
          PREFIX,
          //   fill ? `${PREFIX}--fill` : '',
          //   type && `${PREFIX}--${type}`,
          Array.isArray(className) ? className.join(' ') : className,
        )}
      >
        {React.Children.map(children, renderTabItem)}
      </ul>

      <TabCotent>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const { ...restProps } = child.props;
            return <TabPanel title={child.props.title} {...restProps} key={index} />;
          }
          return null;
        })}
      </TabCotent>
    </React.Fragment>
  );
};

export default Tab;
