import dynamic from 'next/dynamic';
import React from 'react';

import Badge from '@components/Badge/Badge';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const BadgePage = () => {
  return (
    <div className="docs">
      <div className="docs-badge">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>Badge 컴포넌트를 통해 뱃지 요소를 생성합니다.</Text>
          <div className="preview">
            <Badge text="Default Badge" />
          </div>
          <CodeContainer codeString={badgeCode.overview} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. State" />
          <Text>뱃지 스타일은 State 프로퍼티를 통해 변경합니다. 기본 값은 &#39;information&#39; 입니다.</Text>
          <div className="preview">
            <Badge text="Default Badge" />
            <Badge text="Warnning Badge" state="warnning" />
            <Badge text="Error Badge" state="error" />
            <Badge text="Information Badge" state="information" />
          </div>
          <CodeContainer codeString={badgeCode.state} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Outline" />
          <Text>뱃지 Outline 프로퍼티를 통해 뱃지의 Outline을 설정합니다. 기본 값은 &#39;false&#39; 입니다.</Text>
          <div className="preview">
            <Badge text="Default Badge" outline />
            <Badge text="Warnning Badge" state="warnning" outline />
            <Badge text="Error Badge" state="error" outline />
            <Badge text="Information Badge" state="information" outline />
          </div>
          <CodeContainer codeString={badgeCode.outline} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="4. Size" />
          <Text>Size 프로퍼티를 통해 뱃지 사이즈를 지정하며, 기본 값은 &#39;sm&#39; 입니다.</Text>
          <div className="preview">
            <Badge text="Default Badge" />
            <Badge text="Default Badge" size="md" />
            <Badge text="Error Badge" state="error" />
            <Badge text="Error Badge" state="error" size="md" />
          </div>
          <CodeContainer codeString={badgeCode.size} />
        </div>
      </div>
    </div>
  );
};

const badgeCode = {
  overview: [`<!-- Default Badge -->`, '<Badge text="Default Badge" />'].join('\n'),
  state: [
    `<!-- Default Badge -->`,
    `<Badge text="Default Badge" />`,
    ``,
    `<!-- Warnning Badge -->`,
    `<Badge text="Warnning Badge" state="warnning" />`,
    ``,
    `<!-- Error Badge -->`,
    `<Badge text="Error Badge" state="error" />`,
    ``,
    `<!-- Information Badge -->`,
    `<Badge text="Information Badge" state="information" />`,
  ].join(`\n`),
  outline: [
    `<!-- Default Badge -->`,
    `<Badge text="Default Outline Badge" outline />`,
    ``,
    `<!-- Warnning Badge -->`,
    `<Badge text="Warnning Outline Badge" state="warnning" outline />`,
    ``,
    `<!-- Error Badge -->`,
    `<Badge text="Error Outline Badge" state="error" outline />`,
    ``,
    `<!-- Information Badge -->`,
    `<Badge text="Information Outline Badge" state="information" outline />`,
  ].join(`\n`),
  size: [
    `<!-- Small Size Badge -->`,
    `<Badge text="Small Size Badge" />`,
    ``,
    `<!-- Medium Size Badge -->`,
    `<Badge text="Medium Size Badge" size="md" />`,
    ``,
    `<!-- Small Size Badge -->`,
    `<Badge text="Small Size Badge" state="error" />`,
    ``,
    `<!-- Medium Size Badge -->`,
    `<Badge text="Medium Size Badge" state="error" size="md" />`,
  ].join(`\n`),
};

export default BadgePage;
