import dynamic from 'next/dynamic';
import React from 'react';

import Progress from '@components/Progress/Progress';
import Stack from '@components/Stack/Stack';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const ProgressPage = () => {
  return (
    <div className="docs">
      <div className="docs-progress">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>Progress 컴포넌트를 통해 프로그레스 요소를 생성합니다.</Text>
          <div className="preview">
            <Progress now={50} />
          </div>
          <CodeContainer codeString={progressCode.overview} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Now" />
          <Text>Now 프로퍼티를 통해 Progress의 진척도를 나타냅니다.</Text>
          <div className="preview">
            <Stack direction="col" gap={4}>
              <Progress now={10} />
              <Progress now={30} />
              <Progress now={50} />
              <Progress now={70} />
              <Progress now={90} />
            </Stack>
          </div>
          <CodeContainer codeString={progressCode.now} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Label" />
          <Text>
            Label 프로퍼티를 통해 Progress의 진척도를 글자를 통해 추가적으로 나타냅니다.
            <br />
            기본 값은 &#39;false&#39; 입니다.
          </Text>
          <div className="preview">
            <Stack direction="col" gap={4}>
              <Progress now={30} label />
              <Progress now={60} label />
              <Progress now={90} label />
            </Stack>
          </div>
          <CodeContainer codeString={progressCode.label} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="4. State" />
          <Text>State 프로퍼티를 통해 진척도의 배경 스타일을 변경합니다. 기본 값은 &#39;success&#39; 입니다.</Text>
          <div className="preview">
            <Stack direction="col" gap={4}>
              <Progress now={78} label />
              <Progress now={68} state="warnning" label />
              <Progress now={59} state="error" label />
              <Progress now={81} state="information" label />
            </Stack>
          </div>
          <CodeContainer codeString={progressCode.state} />
        </div>
      </div>
    </div>
  );
};

const progressCode = {
  overview: ['<!-- Default Progress -->', '<Progress now={50} />'].join('\n'),
  now: [
    '<!-- 10 Percent Progress -->',
    '<Progress now={10} />',
    '',
    '<!-- 30 Percent Progress -->',
    '<Progress now={30} />',
    '',
    '<!-- 50 Percent Progress -->',
    '<Progress now={50} />',
    '',
    '<!-- 70 Percent Progress -->',
    '<Progress now={70} />',
    '',
    '<!-- 90 Percent Progress -->',
    '<Progress now={90} />',
  ].join('\n'),
  label: [
    '<!-- 30 Percent Progress -->',
    '<Progress now={30} label />',
    '',
    '<!-- 60 Percent Progress -->',
    '<Progress now={60} label />',
    '',
    '<!-- 90 Percent Progress -->',
    '<Progress now={90} label />',
  ].join('\n'),
  state: [
    '<!-- Default Progress -->',
    '<Progress now={78} label />',
    '',
    '<!-- Warnning Progress -->',
    '<Progress now={68} state="warnning" label />',
    '',
    '<!-- Error Progress -->',
    '<Progress now={59} state="error" label />',
    '',
    '<!-- Information Progress -->',
    '<Progress now={81} state="information" label />',
  ].join('\n'),
};

export default ProgressPage;
