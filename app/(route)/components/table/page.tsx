import dynamic from 'next/dynamic';
import React from 'react';

import Stack from '@components/Stack/Stack';
import { Table, TableBody, TableHeader, TableHead, TableData, TableRow } from '@components/Table';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const TablePage = () => {
  return (
    <div className="docs">
      <div className="docs-table">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>Table 컴포넌트를 통해 테이블 요소를 생성합니다.</Text>
          <Stack direction="col" className="double-preview">
            <Stack gap={4}>
              <div className="preview">
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
              <div className="preview">
                <Table caption="기본 테이블 타입">
                  <TableBody>
                    <TableRow>
                      <TableHeader>Header1</TableHeader>
                      <TableData>Data1</TableData>
                      <TableData>Data2</TableData>
                    </TableRow>
                    <TableRow>
                      <TableHeader>Header2</TableHeader>
                      <TableData>Data1</TableData>
                      <TableData>Data2</TableData>
                    </TableRow>
                    <TableRow>
                      <TableHeader>Header2</TableHeader>
                      <TableData>Data1</TableData>
                      <TableData>Data2</TableData>
                    </TableRow>
                    <TableRow>
                      <TableHeader>Header2</TableHeader>
                      <TableData>Data1</TableData>
                      <TableData>Data2</TableData>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Stack>
            <Stack gap={4} className="code-wrap">
              <CodeContainer codeString={tableCode.overview} />
              <CodeContainer codeString={tableCode.overview2} />
            </Stack>
          </Stack>
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. colSpan,rowSpan" />
          <Text>colSpan 및 rowSpan 프로퍼티를 활용하여 테이블 아이템의 열 및 행 병합을 지정할 수 있습니다.</Text>
          <Table caption="colSpan, rowSpan 설명 테이블">
            <TableHead>
              <TableRow>
                <TableHeader>Header1</TableHeader>
                <TableHeader>Header2</TableHeader>
                <TableHeader>Header3</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableData rowSpan={2}>Data1</TableData>
                <TableData>Data2</TableData>
                <TableData>Data3</TableData>
              </TableRow>
              <TableRow>
                <TableData>Data1</TableData>
                <TableData>Data2</TableData>
              </TableRow>
              <TableRow>
                <TableData colSpan={2}>Data1</TableData>
                <TableData>Data2</TableData>
              </TableRow>
            </TableBody>
          </Table>
          <CodeContainer codeString={tableCode.span} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Active" />
          <Text>Active 프로퍼티를 통해 해당 cell의 강조를 설정합니다. 기본값은 &#39;false&#39;입니다.</Text>
          <Table caption="active 설명 테이블">
            <TableHead>
              <TableRow>
                <TableHeader>Header1</TableHeader>
                <TableHeader>Header2</TableHeader>
                <TableHeader active>Header3</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableData active>Data1</TableData>
                <TableData>Data2</TableData>
                <TableData>Data3</TableData>
              </TableRow>
              <TableRow>
                <TableData>Data1</TableData>
                <TableData active>Data2</TableData>
                <TableData>Data3</TableData>
              </TableRow>
              <TableRow>
                <TableData>Data1</TableData>
                <TableData>Data2</TableData>
                <TableData active>Data3</TableData>
              </TableRow>
            </TableBody>
          </Table>
          <CodeContainer codeString={tableCode.active} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="4. Hover" />
          <Text>Hover 프로퍼티를 통해 테이블 행(row)의 hover 활성화를 설정합니다. 기본값은 &#39;false&#39;입니다.</Text>
          <Table caption="hover 설명 테이블" hover>
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
          <CodeContainer codeString={tableCode.hover} />
        </div>
      </div>
    </div>
  );
};

const tableCode = {
  overview: [
    `<!-- Default Table -->`,
    `<Table>`,
    `  <TableHead>`,
    `   <TableRow>`,
    `     <TableHeader>Header1</TableHeader>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableHeader>Header3</TableHeader>`,
    `   </TableRow>`,
    ` </TableHead>`,
    ` <TableBody>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `     <TableData>Data3</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `     <TableData>Data3</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `     <TableData>Data3</TableData>`,
    `   </TableRow>`,
    ` </TableBody>`,
    `</Table>`,
  ].join(`\n`),
  overview2: [
    `<!-- Default Table -->`,
    `<Table>`,
    ` <TableBody>`,
    `   <TableRow>`,
    `     <TableHeader>Header1</TableHeader>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    ` </TableBody>`,
    `</Table>`,
    ``,
    ``,
  ].join(`\n`),
  span: [
    `<!-- Table colSpan, rowSpan -->`,
    `<Table>`,
    `  <TableHead>`,
    `   <TableRow>`,
    `     <TableHeader>Header1</TableHeader>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableHeader>Header3</TableHeader>`,
    `   </TableRow>`,
    ` </TableHead>`,
    ` <TableBody>`,
    `   <TableRow>`,
    `     <TableData rowSpan={2}>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `     <TableData>Data3</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData colSpan={2}>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    ` </TableBody>`,
    `</Table>`,
  ].join(`\n`),
  active: [
    `<!-- Table Active Cell -->`,
    `<Table>`,
    `  <TableHead>`,
    `   <TableRow>`,
    `     <TableHeader>Header1</TableHeader>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableHeader>Header3</TableHeader>`,
    `   </TableRow>`,
    ` </TableHead>`,
    ` <TableBody>`,
    `   <TableRow>`,
    `     <TableData active>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `     <TableData>Data3</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData active>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    ` </TableBody>`,
    `</Table>`,
  ].join(`\n`),
  hover: [
    `<!-- Table Hover Type -->`,
    `<Table caption="hover 설명 테이블" hover>`,
    `  <TableHead>`,
    `   <TableRow>`,
    `     <TableHeader>Header1</TableHeader>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableHeader>Header3</TableHeader>`,
    `   </TableRow>`,
    ` </TableHead>`,
    ` <TableBody>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `     <TableData>Data3</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    ` </TableBody>`,
    `</Table>`,
  ].join(`\n`),
};

export default TablePage;
