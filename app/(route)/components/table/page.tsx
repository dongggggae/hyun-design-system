import dynamic from 'next/dynamic';
import React from 'react';

import Stack from '@components/Stack/Stack';
import Table from '@components/Table/Table';
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
                  <Table.Head>
                    <Table.Row>
                      <Table.HeaderCell>Header1</Table.HeaderCell>
                      <Table.HeaderCell>Header2</Table.HeaderCell>
                      <Table.HeaderCell>Header3</Table.HeaderCell>
                    </Table.Row>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row>
                      <Table.DataCell>Data1</Table.DataCell>
                      <Table.DataCell>Data2</Table.DataCell>
                      <Table.DataCell>Data3</Table.DataCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.DataCell>Data1</Table.DataCell>
                      <Table.DataCell>Data2</Table.DataCell>
                      <Table.DataCell>Data3</Table.DataCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.DataCell>Data1</Table.DataCell>
                      <Table.DataCell>Data2</Table.DataCell>
                      <Table.DataCell>Data3</Table.DataCell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </div>
              <div className="preview">
                <Table caption="기본 테이블 타입">
                  <Table.Body>
                    <Table.Row>
                      <Table.HeaderCell>Header1</Table.HeaderCell>
                      <Table.DataCell>Data1</Table.DataCell>
                      <Table.DataCell>Data2</Table.DataCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell>Header2</Table.HeaderCell>
                      <Table.DataCell>Data1</Table.DataCell>
                      <Table.DataCell>Data2</Table.DataCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell>Header2</Table.HeaderCell>
                      <Table.DataCell>Data1</Table.DataCell>
                      <Table.DataCell>Data2</Table.DataCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell>Header2</Table.HeaderCell>
                      <Table.DataCell>Data1</Table.DataCell>
                      <Table.DataCell>Data2</Table.DataCell>
                    </Table.Row>
                  </Table.Body>
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
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>Header1</Table.HeaderCell>
                <Table.HeaderCell>Header2</Table.HeaderCell>
                <Table.HeaderCell>Header3</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.DataCell rowSpan={2}>Data1</Table.DataCell>
                <Table.DataCell>Data2</Table.DataCell>
                <Table.DataCell>Data3</Table.DataCell>
              </Table.Row>
              <Table.Row>
                <Table.DataCell>Data1</Table.DataCell>
                <Table.DataCell>Data2</Table.DataCell>
              </Table.Row>
              <Table.Row>
                <Table.DataCell colSpan={2}>Data1</Table.DataCell>
                <Table.DataCell>Data2</Table.DataCell>
              </Table.Row>
            </Table.Body>
          </Table>
          <CodeContainer codeString={tableCode.span} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Active" />
          <Text>Active 프로퍼티를 통해 해당 cell의 강조를 설정합니다. 기본값은 &#39;false&#39;입니다.</Text>
          <Table caption="active 설명 테이블">
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>Header1</Table.HeaderCell>
                <Table.HeaderCell>Header2</Table.HeaderCell>
                <Table.HeaderCell active>Header3</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.DataCell active>Data1</Table.DataCell>
                <Table.DataCell>Data2</Table.DataCell>
                <Table.DataCell>Data3</Table.DataCell>
              </Table.Row>
              <Table.Row>
                <Table.DataCell>Data1</Table.DataCell>
                <Table.DataCell active>Data2</Table.DataCell>
                <Table.DataCell>Data3</Table.DataCell>
              </Table.Row>
              <Table.Row>
                <Table.DataCell>Data1</Table.DataCell>
                <Table.DataCell>Data2</Table.DataCell>
                <Table.DataCell active>Data3</Table.DataCell>
              </Table.Row>
            </Table.Body>
          </Table>
          <CodeContainer codeString={tableCode.active} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="4. Hover" />
          <Text>Hover 프로퍼티를 통해 테이블 행(row)의 hover 활성화를 설정합니다. 기본값은 &#39;false&#39;입니다.</Text>
          <Table caption="hover 설명 테이블" hover>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>Header1</Table.HeaderCell>
                <Table.HeaderCell>Header2</Table.HeaderCell>
                <Table.HeaderCell>Header3</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.DataCell>Data1</Table.DataCell>
                <Table.DataCell>Data2</Table.DataCell>
                <Table.DataCell>Data3</Table.DataCell>
              </Table.Row>
              <Table.Row>
                <Table.DataCell>Data1</Table.DataCell>
                <Table.DataCell>Data2</Table.DataCell>
                <Table.DataCell>Data3</Table.DataCell>
              </Table.Row>
              <Table.Row>
                <Table.DataCell>Data1</Table.DataCell>
                <Table.DataCell>Data2</Table.DataCell>
                <Table.DataCell>Data3</Table.DataCell>
              </Table.Row>
            </Table.Body>
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
    `  <Table.Head>`,
    `   <Table.Row>`,
    `     <Table.HeaderCell>Header1</Table.HeaderCell>`,
    `     <Table.HeaderCell>Header2</Table.HeaderCell>`,
    `     <Table.HeaderCell>Header3</Table.HeaderCell>`,
    `   </Table.Row>`,
    ` </Table.Head>`,
    ` <Table.Body>`,
    `   <Table.Row>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `     <Table.DataCell>Data3</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `     <Table.DataCell>Data3</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `     <Table.DataCell>Data3</Table.DataCell>`,
    `   </Table.Row>`,
    ` </Table.Body>`,
    `</Table>`,
  ].join(`\n`),
  overview2: [
    `<!-- Default Table -->`,
    `<Table>`,
    ` <Table.Body>`,
    `   <Table.Row>`,
    `     <Table.HeaderCell>Header1</Table.HeaderCell>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.HeaderCell>Header2</Table.HeaderCell>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.HeaderCell>Header2</Table.HeaderCell>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.HeaderCell>Header2</Table.HeaderCell>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `   </Table.Row>`,
    ` </Table.Body>`,
    `</Table>`,
    ``,
    ``,
  ].join(`\n`),
  span: [
    `<!-- Table colSpan, rowSpan -->`,
    `<Table>`,
    `  <Table.Head>`,
    `   <Table.Row>`,
    `     <Table.HeaderCell>Header1</Table.HeaderCell>`,
    `     <Table.HeaderCell>Header2</Table.HeaderCell>`,
    `     <Table.HeaderCell>Header3</Table.HeaderCell>`,
    `   </Table.Row>`,
    ` </Table.Head>`,
    ` <Table.Body>`,
    `   <Table.Row>`,
    `     <Table.DataCell rowSpan={2}>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `     <Table.DataCell>Data3</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.DataCell colSpan={2}>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `   </Table.Row>`,
    ` </Table.Body>`,
    `</Table>`,
  ].join(`\n`),
  active: [
    `<!-- Table Active Cell -->`,
    `<Table>`,
    `  <Table.Head>`,
    `   <Table.Row>`,
    `     <Table.HeaderCell>Header1</Table.HeaderCell>`,
    `     <Table.HeaderCell>Header2</Table.HeaderCell>`,
    `     <Table.HeaderCell>Header3</Table.HeaderCell>`,
    `   </Table.Row>`,
    ` </Table.Head>`,
    ` <Table.Body>`,
    `   <Table.Row>`,
    `     <Table.DataCell active>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `     <Table.DataCell>Data3</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.DataCell active>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `   </Table.Row>`,
    ` </Table.Body>`,
    `</Table>`,
  ].join(`\n`),
  hover: [
    `<!-- Table Hover Type -->`,
    `<Table caption="hover 설명 테이블" hover>`,
    `  <Table.Head>`,
    `   <Table.Row>`,
    `     <Table.HeaderCell>Header1</Table.HeaderCell>`,
    `     <Table.HeaderCell>Header2</Table.HeaderCell>`,
    `     <Table.HeaderCell>Header3</Table.HeaderCell>`,
    `   </Table.Row>`,
    ` </Table.Head>`,
    ` <Table.Body>`,
    `   <Table.Row>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `     <Table.DataCell>Data3</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `     <Table.DataCell>Data3</Table.DataCell>`,
    `   </Table.Row>`,
    `   <Table.Row>`,
    `     <Table.DataCell>Data1</Table.DataCell>`,
    `     <Table.DataCell>Data2</Table.DataCell>`,
    `     <Table.DataCell>Data3</Table.DataCell>`,
    `   </Table.Row>`,
    ` </Table.Body>`,
    `</Table>`,
  ].join(`\n`),
};

export default TablePage;
