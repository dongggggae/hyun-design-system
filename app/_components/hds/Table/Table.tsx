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

interface TableComponent extends React.FC<TableProps> {
  Head: typeof TableHead;
  HeaderCell: typeof TableHeader;
  Row: typeof TableRow;
  Body: typeof TableBody;
  DataCell: typeof TableData;
}

const Table: TableComponent = ({ children, caption, hover }) => {
  const PREFIX = 'table';

  return (
    <table className={classNames(PREFIX, hover ? `${PREFIX}--hover` : '')}>
      <caption>{caption}</caption>
      {children}
    </table>
  );
};

Table.displayName = 'Table';

Table.Head = TableHead;
Table.HeaderCell = TableHeader;
Table.Row = TableRow;
Table.Body = TableBody;
Table.DataCell = TableData;

export default Table;
