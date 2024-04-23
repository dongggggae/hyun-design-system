'use client';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';

import FormsCheck from '@components/Forms/FormsCheck';
import Stack from '@components/Stack/Stack';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const CheckBoxPage = () => {
  const { register, watch } = useForm();
  const checkedValues = watch(['checkBox8', 'checkBox9']);
  const [checkBox8, checkBox9] = checkedValues;

  return (
    <div className="docs">
      <div className="docs-checkBox">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>FormsCheck 컴포넌트를 통해 체크박스 요소를 생성합니다.</Text>
          <div className="preview">
            <FormsCheck id="checkBox1" type="checkbox" label="checkBox1" />
          </div>
          <CodeContainer codeString={checkBoxCode.overview} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Disabled" />
          <Text>Disabled 프로퍼티를 통해 비활성화를 지정합니다. 기본값은 &#39;false&#39; 입니다.</Text>
          <div className="preview">
            <Stack gap={4}>
              <FormsCheck id="checkBox2" type="checkbox" label="checkBox2" />
              <FormsCheck id="checkBox3" type="checkbox" disabled label="checkBox3" />
              <FormsCheck id="checkBox4" type="checkbox" checked label="checkBox4" />
              <FormsCheck id="checkBox5" type="checkbox" checked disabled label="checkBox5" />
            </Stack>
          </div>
          <CodeContainer codeString={checkBoxCode.disabled} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. Reverse" />
          <Text>
            Reverse 프로퍼티를 통해 input 엘리먼트와 label 엘리먼트의 위치 전환을 지정합니다. 기본값은 &#39;false&#39;
            입니다.
          </Text>
          <div className="preview">
            <Stack gap={4}>
              <FormsCheck id="checkBox6" type="checkbox" label="checkBox6" />
              <FormsCheck id="checkBox7" reverse type="checkbox" label="checkBox7" />
            </Stack>
          </div>
          <CodeContainer codeString={checkBoxCode.reverse} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="4. Watch" />
          <Text>Watch를 통해 해당 유저가 선택한 check-box의 상태 값을 알 수 있습니다.</Text>
          <div className="preview">
            <Stack direction="col" gap={4}>
              <Stack gap={4}>
                <FormsCheck id="checkBox8" type="checkbox" label="checkBox8" {...register('checkBox8')} />
                <FormsCheck id="checkBox9" type="checkbox" label="checkBox9" {...register('checkBox9')} />
              </Stack>
              <Text>
                checkBox8 :
                <Text tag="span" weight="bold">
                  {checkBox8 ? 'true' : 'false'}
                </Text>
              </Text>
              <Text>
                checkBox9 :
                <Text tag="span" weight="bold">
                  {checkBox9 ? 'true' : 'false'}
                </Text>
              </Text>
            </Stack>
          </div>
          <CodeContainer codeString={checkBoxCode.watch} />
        </div>
      </div>
    </div>
  );
};

const checkBoxCode = {
  overview: [`<!-- Default CheckBox -->`, `<FormsCheck id="checkBox1" type="checkbox" label="checkBox1" />`].join('\n'),
  disabled: [
    `<!-- Default CheckBox -->`,
    `<FormsCheck id="checkBox2" type="checkbox" label="checkBox2" />`,
    '',
    `<!-- Disabled CheckBox -->`,
    `<FormsCheck id="checkBox3" type="checkbox" disabled label="checkBox3" />`,
    '',
    `<!-- Checked CheckBox -->`,
    `<FormsCheck id="checkBox4" type="checkbox" checked label="checkBox4" />`,
    '',
    `<!-- Checked Disalbed CheckBox -->`,
    `<FormsCheck id="checkBox4" type="checkbox" checked disabled label="checkBox4" />`,
  ].join('\n'),
  reverse: [
    `<!-- Default CheckBox -->`,
    `<FormsCheck id="checkBox6" type="checkbox" label="checkBox6" />`,
    '',
    `<!-- Reverse CheckBox -->`,
    `<FormsCheck id="checkBox7" reverse type="checkbox" label="checkBox7" />`,
  ].join('\n'),
  watch: [
    `const { register, watch } = useForm();`,
    `const checkedValues = watch(['checkBox8', 'checkBox9']);`,
    ``,
    ` <FormsCheck id="checkBox8" type="checkbox" label="checkBox8" {...register('checkBox8')} />`,
    ` <FormsCheck id="checkBox9" type="checkbox" label="checkBox9" {...register('checkBox9')} />`,
  ].join('\n'),
};

export default CheckBoxPage;
