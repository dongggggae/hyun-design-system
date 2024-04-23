'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { useForm } from 'react-hook-form';

import FormsCheck from '@components/Forms/FormsCheck';
import Stack from '@components/Stack/Stack';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const SwitchPage = () => {
  const { register, watch } = useForm();
  const checkedValues = watch(['switch6', 'switch7']);
  const [switch6, switch7] = checkedValues;

  return (
    <div className="docs">
      <div className="docs-swtich">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>FormsCheck 컴포넌트를 통해 스위치 요소를 생성합니다.</Text>
          <div className="preview">
            <FormsCheck id="switch1" type="switch" />
          </div>
          <CodeContainer codeString={switchCode.overview} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Disabled" />
          <Text>Disabled 프로퍼티를 통해 비활성화를 지정합니다. 기본값은 &#39;false&#39; 입니다.</Text>
          <div className="preview">
            <Stack gap={4}>
              <FormsCheck id="switch2" type="switch" />
              <FormsCheck id="switch3" type="switch" disabled />
              <FormsCheck id="switch4" type="switch" checked />
              <FormsCheck id="switch5" type="switch" checked disabled />
            </Stack>
          </div>
          <CodeContainer codeString={switchCode.disabled} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Watch" />
          <Text>Watch를 통해 해당 유저가 선택한 switch의 상태 값을 알 수 있습니다.</Text>
          <div className="preview">
            <Stack direction="col" gap={4}>
              <Stack gap={4}>
                <FormsCheck id="switch6" type="switch" label="switch6" reverse {...register('switch6')} />
                <FormsCheck id="switch7" type="switch" label="switch7" reverse {...register('switch7')} />
              </Stack>
              <Text>
                Switch6 :
                <Text tag="span" weight="bold">
                  {switch6 ? 'true' : 'false'}
                </Text>
              </Text>
              <Text>
                Switch7 :
                <Text tag="span" weight="bold">
                  {switch7 ? 'true' : 'false'}
                </Text>
              </Text>
            </Stack>
          </div>
          <CodeContainer codeString={switchCode.watch} />
        </div>
      </div>
    </div>
  );
};

const switchCode = {
  overview: [`<!-- Default Swtich -->`, `<FormsCheck id="switch1" type="switch" />`].join('\n'),
  disabled: [
    `<!-- Default Switch -->`,
    `<FormsCheck id="switch2" type="switch" />`,
    '',
    `<!-- Disabled Switch -->`,
    `<FormsCheck id="switch3" type="switch" disabled />`,
    '',
    `<!-- Checked Switch -->`,
    `<FormsCheck id="switch3" type="switch" checked />`,
    '',
    `<!-- Checked Disalbed Switch -->`,
    `<FormsCheck id="switch3" type="switch" checked disabled />`,
  ].join('\n'),
  watch: [
    `const { register, watch } = useForm();`,
    `const checkedValues = watch(['switch6', 'switch7']);`,
    ``,
    `<FormsCheck id="switch6" type="switch" label="switch6" reverse {...register('switch6')} />`,
    `<FormsCheck id="switch7" type="switch" label="switch7" reverse {...register('switch7')} />`,
  ].join('\n'),
};

export default SwitchPage;
