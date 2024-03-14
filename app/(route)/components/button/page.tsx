'use client';
import dynamic from 'next/dynamic';
import React from 'react';

import Btn from '@components/Btn/Btn';
import BtnText from '@components/Btn/Text';
import Icon from '@components/Icon/Icon';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const ButtonPage = () => {
  return (
    <div className="docs">
      <div className="docs-button">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>Btn 컴포넌트를 통해 버튼 요소를 생성합니다.</Text>
          <div className="preview">
            <Btn text="Default Btn" />
            <Btn variant="solid-red" text="SolidRed Btn" />
            <Btn variant="outline-green" text="OutlineGreen Btn" />
            <Btn variant="outline-gray" text="OutlineGray Btn" />
            <Btn variant="link" text="Link Btn" />
          </div>
          <CodeContainer codeString={buttonCode.overview} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Variant" />
          <Text>버튼 스타일은 Variant 프로퍼티를 통해 변경합니다. 기본 값은 &#39;solid-green&#39; 입니다.</Text>
          <div className="preview">
            <Btn text="Default Btn" />
            <Btn variant="solid-red" text="SolidRed Btn" />
            <Btn variant="outline-green" text="OutlineGreen Btn" />
            <Btn variant="outline-gray" text="OutlineGray Btn" />
            <Btn variant="link" text="Link Btn" />
          </div>
          <CodeContainer codeString={buttonCode.varinat} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Size" />
          <Text>
            Size 프로퍼티를 통해 요소의 역할을 결정합니다. 기본값은 &#39;md&#39; 입니다.
            <br />
            Size 프로퍼티 속성은 &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39; &#39;xs&#39; 가 있습니다.
          </Text>
          <div className="preview">
            <Btn size="lg" text="Large Btn" />
            <Btn size="md" text="Medium Btn" />
            <Btn size="sm" text="Small Btn" />
            <Btn size="xs" text="XSmall Btn" />
          </div>
          <CodeContainer codeString={buttonCode.size} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="4. Type" />
          <Text>
            Type 프로퍼티를 통해 요소의 역할을 결정합니다. 기본값은 &#39;button&#39; 입니다.
            <br />
            Type 프로퍼티 속성은 &#39;button&#39;, &#39;reset&#39;, &#39;submit&#39; 가 있습니다.
          </Text>
          <div className="preview">
            <Btn type="button" text="Type: Button" />
            <Btn type="reset" text="Type: Reset" />
            <Btn type="submit" text="Type: Submit" />
          </div>
          <CodeContainer codeString={buttonCode.type} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="5. Disabled" />
          <Text>Disalbed 프로퍼티를 통해 버튼의 비활성화를 설정합니다.</Text>
          <div className="preview">
            <Btn disabled text="Disabled Button" />
          </div>
          <CodeContainer codeString={buttonCode.disabled} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="6. Icon" />
          <Text>버튼 아이콘은 Icon 컴포넌트를 통해 아이콘을 생성합니다.</Text>
          <div className="preview">
            <Btn>
              <Icon name="arrow-left" />
              <BtnText text="Btn Text" />
            </Btn>
            <Btn icon="arrow-right" text="Btn Text" />
            <Btn icon="plus" iconOnly />
          </div>
          <CodeContainer codeString={buttonCode.icon} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="7. Events" />
          <Text>onClick 프로퍼티를 통해 클릭 이벤트를 발생시킵니다.</Text>
          <div className="preview">
            <Btn text="Click Btn" onClick={() => alert('Click Event')} />
          </div>
          <CodeContainer codeString={buttonCode.event} />
        </div>
      </div>
    </div>
  );
};

const buttonCode = {
  overview: [
    `<!-- Default Btn -->`,
    `<Btn text="Default Btn" />`,
    ``,
    `<!-- SolidRed Btn -->`,
    `<Btn variant="solid-red" text="SolidRed Btn" />`,
    ``,
    `<!-- OutlineGreen Btn -->`,
    `<Btn variant="outline-green" text="OutlineGreen Btn" />`,
    ``,
    `<!-- OutlineGray Btn -->`,
    `<Btn variant="outline-gray" text="OutlineGray Btn" />`,
    ``,
    `<!-- Link Btn -->`,
    `<Btn variant="link" text="Link Btn" />`,
  ].join('\n'),
  varinat: [
    `<!-- Default Btn -->`,
    `<Btn text="Default Btn" />`,
    ``,
    `<!-- SolidRed Btn -->`,
    `<Btn variant="solid-red" text="SolidRed Btn" />`,
    ``,
    `<!-- OutlineGreen Btn -->`,
    `<Btn variant="outline-green" text="OutlineGreen Btn" />`,
    ``,
    `<!-- OutlineGray Btn -->`,
    `<Btn variant="outline-gray" text="OutlineGray Btn" />`,
    ``,
    `<!-- Link Btn -->`,
    `<Btn variant="link" text="Link Btn" />`,
  ].join(`\n`),
  size: [
    `<!-- Large Btn -->`,
    `<Btn size="lg" text="Large Btn" />`,
    ``,
    `<!-- Medium Btn -->`,
    `<Btn text="Medium Btn" />`,
    ``,
    `<!-- Small Btn -->`,
    `<Btn size="sm" text="Small Btn" />`,
    ``,
    `<!-- XSmall Btn -->`,
    `<Btn size="xs" text="XSmall Btn" />`,
  ].join(`\n`),
  type: [
    `<!-- Type: Button -->`,
    `<Btn type="button" text="Type: Button" />`,
    ``,
    `<!-- Type: Reset -->`,
    `<Btn type="reset" text="Type: Reset" />`,
    ``,
    `<!-- Type: Submit -->`,
    `<Btn type="submit" text="Type: Submit" />`,
  ].join(`\n`),
  disabled: [`<!-- Disabled Btn -->`, `<Btn disabled text="Disabled Btn" />`].join(`\n`),
  icon: [
    `<!-- Left Icon Btn -->`,
    `<Btn>`,
    ` <Icon name="arrow-left" />`,
    ` <BtnText text="Btn Text" />`,
    `</Btn>`,
    ``,
    `<!-- Right Icon Btn -->`,
    `<Btn icon="arrow-right" text="Btn Text" />`,
    ``,
    `<!-- Only Icon Btn -->`,
    `<Btn icon="plus" iconOnly />`,
  ].join(`\n`),
  event: [`<!-- Btn Events> -->`, `<Btn text="Click Button" onClick={() => alert('Click Event')} />`].join(`\n`),
};

export default ButtonPage;
