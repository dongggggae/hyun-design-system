import React from 'react';

const TableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <thead>{children}</thead>;
};

export default TableHead;
