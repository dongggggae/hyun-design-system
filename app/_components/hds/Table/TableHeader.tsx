import React from 'react';
import classNames from '@utils/classNames';

interface TableHeaderProps {
  children: React.ReactNode;
  rowSpan?: number;
  colSpan?: number;
  active?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, rowSpan, colSpan, active }) => {
  const attributes: { rowSpan?: number; colSpan?: number } = {};

  attributes.rowSpan = rowSpan || attributes.rowSpan;
  attributes.colSpan = colSpan || attributes.colSpan;

  return (
    <th {...attributes} className={classNames(active ? 'active' : '')}>
      {children}
    </th>
  );
};

export default TableHeader;
