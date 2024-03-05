import React from 'react';

import classNames from '@utils/classNames';

interface TableDataProps {
  children: React.ReactNode;
  rowSpan?: number;
  colSpan?: number;
  active?: boolean;
}

const TableData: React.FC<TableDataProps> = ({ children, rowSpan, colSpan, active }) => {
  const attributes: { rowSpan?: number; colSpan?: number } = {};

  attributes.rowSpan = rowSpan || attributes.rowSpan;
  attributes.colSpan = colSpan || attributes.colSpan;

  return (
    <td {...attributes} className={classNames(active ? 'active' : '')}>
      {children}
    </td>
  );
};

export default TableData;
