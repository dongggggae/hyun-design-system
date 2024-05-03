'use client';
import dynamic from 'next/dynamic';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import FormsCheck from '@components/Forms/FormsCheck';
import Stack from '@components/Stack/Stack';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const RadioPage = () => {
  const { register } = useForm();

  const [selectedValue, setSelectedValue] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="docs">
      <div className="docs-radio">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>FormsCheck 컴포넌트를 통해 라디오 요소를 생성합니다.</Text>
          <div className="preview">
            <Stack gap={4}>
              <FormsCheck id="radio1" type="radio" label="Radio1" {...register('radioGroup1')} />
              <FormsCheck id="radio2" type="radio" label="Radio2" {...register('radioGroup1')} />
            </Stack>
          </div>
          <CodeContainer codeString={radioCode.overview} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Disabled" />
          <Text>Disabled 프로퍼티를 통해 비활성화를 지정합니다. 기본값은 &#39;false&#39; 입니다.</Text>
          <div className="preview">
            <Stack gap={4}>
              <FormsCheck id="radio3" type="radio" label="Radio3" />
              <FormsCheck id="radio4" type="radio" disabled label="Radio4" />
              <FormsCheck id="radio5" type="radio" checked label="Radio5" />
              <FormsCheck id="radio6" type="radio" checked disabled label="Radio6" />
            </Stack>
          </div>
          <CodeContainer codeString={radioCode.disabled} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Reverse" />
          <Text>
            Reverse 프로퍼티를 통해 input 엘리먼트와 label 엘리먼트의 위치 전환을 지정합니다. 기본값은 &#39;false&#39;
            입니다.
          </Text>
          <div className="preview">
            <Stack gap={4}>
              <FormsCheck id="radio7" type="radio" label="Radio7" {...register('radioGroup2')} />
              <FormsCheck id="radio8" type="radio" label="Radio8" reverse {...register('radioGroup2')} />
            </Stack>
          </div>
          <CodeContainer codeString={radioCode.reverse} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="4. onChange" />
          <Text>onChange를 통해 해당 유저가 선택한 Radio의 상태 값을 알 수 있습니다.</Text>
          <div className="preview">
            <Stack direction="col" gap={4}>
              <Stack gap={4}>
                <FormsCheck
                  id="radio9"
                  value="radio9"
                  type="radio"
                  label="Radio9"
                  {...register('radioGroup3')}
                  onChange={handleChange}
                />
                <FormsCheck
                  id="radio10"
                  value="radio10"
                  type="radio"
                  label="Radio10"
                  {...register('radioGroup3')}
                  onChange={handleChange}
                />
              </Stack>
              <Text>
                선택된 Radio :
                <Text tag="span" weight="bold">
                  {selectedValue === '' ? 'Not Select' : selectedValue}
                </Text>
              </Text>
            </Stack>
          </div>
          <CodeContainer codeString={radioCode.onChnage} />
        </div>
      </div>
    </div>
  );
};

const radioCode = {
  overview: [`<!-- Default Radio -->`, `<FormsCheck id="radio1" type="radio" label="Radio1" />`].join('\n'),
  disabled: [
    `<!-- Default Radio -->`,
    `<FormsCheck id="radio3" type="radio" label="Radio3" />`,
    '',
    `<!-- Disabled Radio -->`,
    `<FormsCheck id="radio4" type="radio" disabled label="Radio4" />`,
    '',
    `<!-- Checked Radio -->`,
    `<FormsCheck id="radio5" type="radio" checked label="Radio5" />`,
    '',
    `<!-- Checked Disalbed Radio -->`,
    `<FormsCheck id="radio6" type="radio" checked disabled label="Radio6" />`,
  ].join('\n'),
  reverse: [
    `<!-- Default Radio -->`,
    `<FormsCheck id="radio7" type="radio" label="Radio7" />`,
    '',
    `<!-- Reverse Radio -->`,
    `<FormsCheck id="radio8" type="radio" label="Radio8" reverse />`,
  ].join('\n'),
  onChnage: [
    `<!-- Script -->`,
    `const [selectedValue, setSelectedValue] = useState<string>('');`,
    `const handleChange = (e: ChangeEvent<HTMLInputElement>) => {`,
    ` setSelectedValue(e.target.value);`,
    `};`,
    ``,
    `<FormsCheck id="radio9" value="radio9" type="radio" label="Radio9" {...register('radioGroup3')} onChange={handleChange} />`,
    `<FormsCheck id="radio10" value="radio10" type="radio" label="Radio10" {...register('radioGroup3')} onChange={handleChange} />`,
  ].join('\n'),
};

export default RadioPage;
