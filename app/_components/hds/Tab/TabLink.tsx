import React from 'react';

import classNames from '@utils/classNames';

interface TabLinkProps {
  title: string;
}

const TabLink: React.FC<TabLinkProps> = ({ title }) => {
  const PREFIX = 'tab';

  return (
    <button className={classNames(`${PREFIX}__link`)}>
      <span className={classNames(`${PREFIX}__text`)}>{title}</span>
    </button>
  );
};

export default TabLink;
