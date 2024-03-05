import dynamic from 'next/dynamic';
import React from 'react';

import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const TextPage = () => {
  return (
    <div className="docs">
      <div className="docs-text">
        {/* Overview */}
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>Text 컴포넌트를 통해 텍스트 요소를 생성합니다.</Text>
          <div className="preview">
            <Text>Default Text</Text>
          </div>
          <CodeContainer codeString={TextCode.overview} />
        </div>
        {/* //Overview */}
        {/* Color */}
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Color" />
          <Text>
            Color 프로퍼티를 통해 텍스트 컬러를 지정하며, 기본 값은 &#39;#555555&#39; 입니다 다른 컬러를 적용하고 싶은
            경우에 사용합니다.
            <br />
            아래는 Color 프로퍼티를 통해 컬러를 적용한 예시입니다.
          </Text>
          <div className="preview">
            <Text size="lg" color="primary">
              Primary Color
            </Text>
            <Text size="lg">Default Color</Text>
            <Text size="lg" color="tertiary">
              Tertiary Color
            </Text>
            <Text size="lg" color="information">
              Information Color
            </Text>
            <Text size="lg" color="positive">
              Positive Color
            </Text>
            <Text size="lg" color="caution">
              Caution Color
            </Text>
            <Text size="lg" color="negative">
              Negative Color
            </Text>
          </div>
          <CodeContainer codeString={TextCode.color} />
        </div>
        {/* //Color */}
        {/* Size */}
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Size" />
          <Text>
            Size 프로퍼티를 통해 텍스트 사이즈를 지정하며, 해당 태그에 다른 크기를 적용하고 싶은 경우에 사용합니다.
            <br />
            아래는 Size 프로퍼티를 통해 사이즈를 적용한 예시입니다.
          </Text>
          <div className="preview">
            <Text size="lg">Large Text</Text>
            <Text>Medium Text</Text>
            <Text size="sm">Small Text</Text>
            <Text size="xs">XSmall Text</Text>
            <Text size="xxs">XXSmall Text</Text>
          </div>
          <CodeContainer codeString={TextCode.size} />
        </div>
        {/* //Size */}
        {/* Tag */}
        <div className="component-content">
          <Heading level="h2" size={2} text="4. Tag" />
          <Text>
            Tag 프로퍼티를 통해 렌더링 되는 태그를 변경합니다. 기본 값은 &#39;p&#39;입니다
            <br />
            다른 Tag를 적용하고 싶을 경우에 사용합니다.
          </Text>
          <div className="preview">
            <Text tag="p" size="lg">
              PTag Text
            </Text>
            <Text tag="span" size="lg">
              SpanTag Text
            </Text>
            <Text tag="strong" size="lg">
              StrongTag Text
            </Text>
          </div>
          <CodeContainer codeString={TextCode.tag} />
        </div>
        {/* //Tag */}
        {/* Weight */}
        <div className="component-content">
          <Heading level="h2" size={2} text="5. Weight" />
          <Text>
            Weight 프로퍼티를 통해 텍스트의 &#39;font-weight&#39;를 변경합니다. 기본 값은 &#39;regular&#39;입니다
          </Text>
          <div className="preview">
            <Text weight="light" size="lg">
              Light Text
            </Text>
            <Text weight="regular" size="lg">
              Regular Text
            </Text>
            <Text weight="medium" size="lg">
              Medium Text
            </Text>
            <Text weight="semibold" size="lg">
              Semibold Text
            </Text>
            <Text weight="bold" size="lg">
              Bold Text
            </Text>
          </div>
          <CodeContainer codeString={TextCode.weight} />
        </div>
        {/* //Weight */}
      </div>
    </div>
  );
};

const TextCode = {
  overview: [`<!-- Default Text -->`, `<Text>Default Text</Text>`].join('\n'),
  color: [
    `<!-- Text Primary Color -->`,
    `<Text size="lg" color="primary">Primary Color</Text>`,
    ``,
    `<!-- Text Default Color -->`,
    `<Text size="lg">Default Color</Text>`,
    ``,
    `<!-- Text Tertiary Color -->`,
    `<Text size="lg" color="tertiary">Tertiary Color</Text>`,
    ``,
    `<!-- Text Information Color -->`,
    `<Text size="lg" color="information">Information Color</Text>`,
    ``,
    `<!-- Text Positive Color -->`,
    `<Text size="lg" color="positive">Positive Color</Text>`,
    ``,
    `<!-- Text Caution Color -->`,
    `<Text size="lg" color="caution">Caution Color</Text>`,
    ``,
    `<!-- Text Negative Color -->`,
    `<Text size="lg" color="negative">Negative Color</Text>`,
  ].join('\n'),
  size: [
    `<!-- Large Text -->`,
    `<Text size="lg">Large Text</Text>`,
    ``,
    `<!-- Medium Text -->`,
    `<Text>Medium Text</Text>`,
    ``,
    `<!-- Small Text -->`,
    `<Text size="sm">Small Text</Text>`,
    ``,
    `<!-- XSmall Text -->`,
    `<Text size="xs">XSmall Text</Text>`,
    ``,
    `<!-- XXSmall Text -->`,
    `<Text size="xxs">XXSmall Text</Text>`,
  ].join('\n'),
  tag: [
    `<!-- PTag Text -->`,
    `<Text tag="p" size="lg">PTag Text</Text>`,
    ``,
    `<!-- SpanTag Text -->`,
    `<Text tag="span" size="lg">SpanTag Text</Text>`,
    ``,
    `<!-- StrongTag Text -->`,
    `<Text tag="strong" size="lg">StrongTag Text</Text>`,
  ].join('\n'),
  weight: [
    `<!-- Light Text -->`,
    `<Text weight="light" size="lg">Light Text</Text>`,
    ``,
    `<!-- Regular Text -->`,
    `<Text weight="regular" size="lg">Regular Text</Text>`,
    ``,
    `<!-- Medium Text -->`,
    `<Text weight="medium" size="lg">Medium Text</Text>`,
    ``,
    `<!-- Semibold Text -->`,
    `<Text weight="semibold" size="lg">Semibold Text</Text>`,
    ``,
    `<!-- Bold Text -->`,
    `<Text weight="bold" size="lg">Bold Text</Text>`,
  ].join('\n'),
};

export default TextPage;
