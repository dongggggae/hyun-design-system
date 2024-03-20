import dynamic from 'next/dynamic';
import React from 'react';

import Icon from '@components/Icon/Icon';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const IconPage = () => {
  return (
    <div className="docs">
      <div className="docs-icon">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>Icon 컴포넌트를 통해 아이콘 요소를 생성합니다.</Text>
          <div className="preview">
            {icons.map((names) => (
              <Icon key={names} name={names} color="black" size="lg" />
            ))}
          </div>
          <CodeContainer codeString={iconCode.overview} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Color" />
          <Text>
            Color 프로퍼티를 통해 아이콘 컬러를 지정하며, 기본 값은 &#39;#fff&#39; 입니다 다른 컬러를 적용하고 싶은
            경우에 사용합니다.
            <br />
            아래는 color 프로퍼티를 통해 컬러를 적용한 예시입니다.
          </Text>
          <div className="preview">
            <Icon name="close" size="lg" color="black" />
            <Icon name="close" size="lg" color="green" />
            <Icon name="close" size="lg" color="blue" />
            <Icon name="close" size="lg" color="amber" />
            <Icon name="close" size="lg" color="red" />
          </div>
          <CodeContainer codeString={iconCode.color} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Size" />
          <Text>
            Size 프로퍼티를 통해 아이콘의 사이즈를 지정하며, 기본값은 &#39;md&#39; 입니다.
            <br />
            Size 프로퍼티 속성은 &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39; 가 있습니다.
          </Text>
          <div className="preview">
            <Icon name="plus" size="lg" color="black" />
            <Icon name="plus" size="md" color="black" />
            <Icon name="plus" size="sm" color="black" />
          </div>
          <CodeContainer codeString={iconCode.size} />
        </div>
      </div>
    </div>
  );
};

const icons = [
  'arrow-up',
  'arrow-right',
  'arrow-down',
  'arrow-left',
  'check',
  'check-fill',
  'clear',
  'clear-fill',
  'close',
  'error',
  'error-fill',
  'info',
  'menu',
  'plus',
  'search',
  'visible',
  'invisible',
];

const iconCode = {
  overview: [
    `<!-- Default Icon -->`,
    `<Icon name="arrow-up" color="black" />`,
    `<Icon name="arrow-right" color="black" />`,
    `<Icon name="arrow-down" color="black" />`,
    `<Icon name="arrow-left" color="black" />`,
  ].join(`\n`),
  color: [
    `<!-- Black Color Icon -->`,
    `<Icon name="close" size="lg" color="black" />`,
    ``,
    `<!-- Green Color Icon -->`,
    `<Icon name="close" size="lg" color="green" />`,
    ``,
    `<!-- Blue Color Icon -->`,
    `<Icon name="close" size="lg" color="blue" />`,
    ``,
    `<!-- Amber Color Icon -->`,
    ` <Icon name="close" size="lg" color="amber" />`,
    ``,
    `<!-- Red Color Icon -->`,
    `<Icon name="close" size="lg" color="red" />`,
  ].join(`\n`),
  size: [
    `<!-- Large Size Icon -->`,
    `<Icon name="plus" size="lg" color="black" />`,
    ``,
    `<!-- Medium Size Icon -->`,
    `<Icon name="plus" size="md" color="black" />`,
    ``,
    `<!-- Small Size Icon -->`,
    `<Icon name="plus" size="sm" color="black" />`,
  ].join(`\n`),
};

export default IconPage;
