import React from 'react';
import { Table, TableBody, TableHeader, TableHead, TableData, TableRow } from '@components/Table';

const TablePage = () => {
  return (
    <div className="docs">
      <Table caption="기본 테이블 타입">
        <TableHead>
          <TableRow>
            <TableHeader>Header1</TableHeader>
            <TableHeader>Header2</TableHeader>
            <TableHeader>Header3</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableData>Data1</TableData>
            <TableData>Data2</TableData>
            <TableData>Data3</TableData>
          </TableRow>
          <TableRow>
            <TableData>Data1</TableData>
            <TableData>Data2</TableData>
            <TableData>Data3</TableData>
          </TableRow>
          <TableRow>
            <TableData>Data1</TableData>
            <TableData>Data2</TableData>
            <TableData>Data3</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TablePage;
