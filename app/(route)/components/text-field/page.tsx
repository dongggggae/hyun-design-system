'use client';
import dynamic from 'next/dynamic';

import FormsInput from '@components/Forms/FormsInput';
import Stack from '@components/Stack/Stack';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const TextFiledPage = () => {
  return (
    <div className="docs">
      <div className="docs-input">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>FormsInput 컴포넌트를 통해 입력을 할 수 있는 TextField 요소를 생성합니다.</Text>
          <div className="preview">
            <FormsInput id="input1" />
          </div>
          <CodeContainer codeString={textFieldCode.overview} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Addon" />
          <Text>FormsInput 컴포넌트의 타입에 따라 Addon 컴포넌트를 통해 필드 유형이 추가됩니다.</Text>
          <div className="preview">
            <Stack gap={4}>
              <FormsInput id="input2" type="text" placeholder="Default TextField" />
              <FormsInput id="input3" type="password" placeholder="Password TextField" />
              <FormsInput id="input4" type="search" placeholder="Search TextField" />
            </Stack>
          </div>
          <CodeContainer codeString={textFieldCode.addon} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. State" />
          <Text>
            State 프로퍼티를 통해 FormsInput 컴포넌트의 상태를 지정합니다. &#39;valid&#39;는 완료 상태,
            &#39;invalid&#39;는 에러 상태를 나타냅니다.
          </Text>
          <div className="preview">
            <Stack gap={4}>
              <FormsInput id="input5" type="text" value="Valid TextFiled" />
              <FormsInput id="input6" type="text" value="Valid TextFiled" state="valid" />
              <FormsInput id="input7" type="text" value="InValid TextField" state="invalid" />
            </Stack>
          </div>
          <CodeContainer codeString={textFieldCode.state} />
        </div>
      </div>
    </div>
  );
};

const textFieldCode = {
  overview: [`<!-- Default TextField -->`, `<FormsInput id="input1" />`].join('\n'),
  addon: [
    `<!-- Default TextField -->`,
    `<FormsInput id="input2" type="text" />`,
    ``,
    `<!-- Password TextField -->`,
    `<FormsInput id="input3" type="password" />`,
    ``,
    `<!-- Search TextField -->`,
    `<FormsInput id="input4" type="search" />`,
  ].join('\n'),
  state: [
    `<!-- Default TextField -->`,
    `<FormsInput id="input5" type="text" value="Valid TextFiled" />`,
    ``,
    `<!-- Valid TextField -->`,
    `<FormsInput id="input6" type="text" value="Valid TextFiled" state="valid" />`,
    ``,
    `<!-- InValid TextField -->`,
    `<FormsInput id="input7" type="text" value="InValid TextField" state="invalid" />`,
  ].join('\n'),
};

export default TextFiledPage;
