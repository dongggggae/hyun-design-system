import dynamic from 'next/dynamic';
import React from 'react';

import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const HeadingPage = () => {
  return (
    <div className="docs">
      <div className="docs-heading">
        {/* Overview */}
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>Heading 컴포넌트를 통해 헤더 요소를 생성합니다.</Text>
          <div className="preview">
            <Heading level="h1" text="Default Title" />
            <Heading level="h3" size={3} text="H3 Title" />
          </div>
          <CodeContainer codeString={HeadingCode.overview} />
        </div>
        {/* //Overview */}
        {/* Level */}
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Level" />
          <Text>Level 프로퍼티를 통해 렌더링 되는 태그를 변경합니다.</Text>
          <div className="preview">
            <Heading level="h1" size={1} text="H1 Title" />
            <Heading level="h2" size={2} text="H2 Title" />
            <Heading level="h3" size={3} text="H3 Title" />
            <Heading level="h4" size={4} text="H4 Title" />
            <Heading level="h5" size={5} text="H5 Title" />
            <Heading level="h6" size={6} text="H6 Title" />
          </div>
          <CodeContainer codeString={HeadingCode.level} />
        </div>
        {/* //Level */}
        {/* Color */}
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Color" />
          <Text>
            Color 프로퍼티를 통해 헤더 컬러를 지정하며, 기본 값은 &#39;#111111&#39; 입니다 다른 컬러를 적용하고 싶은
            경우에 사용합니다.
            <br />
            아래는 Color 프로퍼티를 통해 컬러를 적용한 예시입니다.
          </Text>
          <div className="preview">
            <Heading level="h3" size={3} color="primary" text="Default Color" />
            <Heading level="h3" size={3} color="secondary" text="Secondary Color" />
            <Heading level="h3" size={3} color="tertiary" text="Tertiary Color" />
            <Heading level="h3" size={3} color="information" text="Information Color" />
            <Heading level="h3" size={3} color="positive" text="Positive Color" />
            <Heading level="h3" size={3} color="caution" text="Caution Color" />
            <Heading level="h3" size={3} color="negative" text="Negative Color" />
          </div>
          <CodeContainer codeString={HeadingCode.color} />
        </div>
        {/* //Color */}
        {/* Size */}
        <div className="component-content">
          <Heading level="h2" size={2} text="4. Size" />
          <Text>
            Size 프로퍼티를 통해 헤더 사이즈를 지정하며, 해당 태그에 다른 크기를 적용하고 싶은 경우에 사용합니다.
            <br />
            아래는 h1 태그로 Size 프로퍼티를 통해 사이즈를 적용한 예시입니다.
          </Text>
          <div className="preview">
            <Heading level="h1" size={1} text="H1 Title" />
            <Heading level="h1" size={2} text="H2 Title" />
            <Heading level="h1" size={3} text="H3 Title" />
            <Heading level="h1" size={4} text="H4 Title" />
            <Heading level="h1" size={5} text="H5 Title" />
            <Heading level="h1" size={6} text="H6 Title" />
          </div>
          <CodeContainer codeString={HeadingCode.level} />
        </div>
        {/* //Size */}
      </div>
    </div>
  );
};

const HeadingCode = {
  overview: [
    `<!-- Default Heading -->`,
    `<Heading level="h1" text="Default Title" />`,
    ``,
    `<!-- H3 Heading -->`,
    `<Heading level="h3" size={3} text="H3 Title" />`,
  ].join('\n'),
  level: [
    `<!-- H1 Heading -->`,
    `<Heading level="h1" size={1} text="H1 Title" />`,
    ``,
    `<!-- H2 Heading -->`,
    `<Heading level="h2" size={2} text="H2 Title" />`,
    ``,
    `<!-- H3 Heading -->`,
    `<Heading level="h3" size={3} text="H3 Title" />`,
    ``,
    `<!-- H4 Heading -->`,
    `<Heading level="h4" size={4} text="H4 Title" />`,
    ``,
    `<!-- H5 Heading -->`,
    `<Heading level="h5" size={5} text="H5 Title" />`,
    ``,
    `<!-- H6 Heading -->`,
    `<Heading level="h6" size={6} text="H6 Title" />`,
  ].join('\n'),
  color: [
    `<!-- Heading Default Color -->`,
    `<Heading level="h3" size='3' text="Default Color" />`,
    ``,
    `<!-- Heading Secondary Color -->`,
    `<Heading level="h3" size='3' color="secondary" text="Secondary Color" />`,
    ``,
    `<!-- Heading Tertiary Color -->`,
    `<Heading level="h3" size='3' color="tertiary" text="Tertiary Color" />`,
    ``,
    `<!-- Heading Information Color -->`,
    `<Heading level="h3" size='3' color="information" text="Information Color" />`,
    ``,
    `<!-- Heading Positive Color -->`,
    `<Heading level="h3" size='3' color="positive" text="Positive Color" />`,
    ``,
    `<!-- Heading Caution Color -->`,
    `<Heading level="h3" size='3' color="caution" text="Caution Color" />`,
    ``,
    `<!-- Heading Negative Color -->`,
    `<Heading level="h3" size='3' color="negative" text="Negative Color" />`,
  ].join('\n'),
  size: [
    `<!-- H1 Heading -->`,
    `<Heading level="h1" size='1' text="H1 Size" />`,
    ``,
    `<!-- H2 Heading -->`,
    `<Heading level="h1" size='2' text="H2 Size" />`,
    ``,
    `<!-- H3 Heading -->`,
    `<Heading level="h1" size='3' text="H3 Size" />`,
    ``,
    `<!-- H4 Heading -->`,
    `<Heading level="h1" size='4' text="H4 Size" />`,
    ``,
    `<!-- H5 Heading -->`,
    `<Heading level="h1" size='5' text="H5 Size" />`,
    ``,
    `<!-- H6 Heading -->`,
    `<Heading level="h1" size='6' text="H6 Size" />`,
  ].join('\n'),
};

export default HeadingPage;
