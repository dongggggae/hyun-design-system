import React from 'react';

const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default TableRow;
