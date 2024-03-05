import React from 'react';

import classNames from '@utils/classNames';

interface TableProps {
  children: React.ReactNode;
  caption: string;
  hover?: boolean;
}

const Table: React.FC<TableProps> = ({ children, caption, hover }) => {
  const PREFIX = 'table';

  return (
    <table className={classNames(PREFIX, hover ? `${PREFIX}--hover` : '')}>
      <caption>{caption}</caption>
      {children}
    </table>
  );
};

Table.displayName = 'Table';

export default Table;
