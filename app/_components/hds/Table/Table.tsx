import React from 'react';

import classNames from '@utils/classNames';

import TableBody from './TableBody';
import TableData from './TableData';
import TableHead from './TableHead';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

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

export default Object.assign(Table, {
  Head: TableHead,
  HeaderCell: TableHeader,
  Row: TableRow,
  Body: TableBody,
  DataCell: TableData,
});
