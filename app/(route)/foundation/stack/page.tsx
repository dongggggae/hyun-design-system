import dynamic from 'next/dynamic';
import React from 'react';

import Stack from '@components/Stack/Stack';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const StackPage = () => {
  return (
    <div className="docs">
      <div className="docs-stack">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>Stack 컴포넌트를 통해 스택 요소를 생성합니다.</Text>
          <div className="preview">
            <Stack>
              <div className="empty-box" />
              <div className="empty-box" />
              <div className="empty-box" />
              <div className="empty-box" />
              <div className="empty-box" />
            </Stack>
          </div>
          <CodeContainer codeString={StackCode.overview} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Gap" />
          <Text>Gap 프로퍼티를 통해 스택 요소의 간격을 조정합니다. 기본 값은 &#39;8px&#39; 입니다</Text>
          <Stack direction="col" className="double-preview">
            <Stack gap={4}>
              <div className="preview">
                <Stack>
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                </Stack>
              </div>
              <div className="preview">
                <Stack gap={10}>
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                </Stack>
              </div>
            </Stack>
            <Stack gap={4} className="code-wrap">
              <CodeContainer codeString={StackCode.gap} />
              <CodeContainer codeString={StackCode.gap2} />
            </Stack>
          </Stack>
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Direction" />
          <Text>Direction 프로퍼티를 통해 스택 요소의 나열 방향을 결정합니다. 기본 값은 &#39;row&#39; 입니다.</Text>
          <Stack direction="col" className="double-preview">
            <Stack gap={4}>
              <div className="preview">
                <Stack>
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                </Stack>
              </div>
              <div className="preview">
                <Stack direction="col">
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                  <div className="empty-box" />
                </Stack>
              </div>
            </Stack>
            <Stack gap={4} className="code-wrap">
              <CodeContainer codeString={StackCode.direction} />
              <CodeContainer codeString={StackCode.direction2} />
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
};

const StackCode = {
  overview: [
    '<Stack>',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    '</Stack>',
  ].join('\n'),
  gap: [
    '<Stack>',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    '</Stack>',
  ].join('\n'),
  gap2: [
    '<Stack gap={10}>',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    '</Stack>',
  ].join('\n'),
  direction: [
    '<Stack>',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    '</Stack>',
  ].join('\n'),
  direction2: [
    '<Stack direction={"col"}>',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    ' <div className="empty-box" />',
    '</Stack>',
  ].join('\n'),
};

export default StackPage;
