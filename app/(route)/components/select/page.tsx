'use client';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';

import FormsSelect from '@components/Forms/FormsSelect';
import Stack from '@components/Stack/Stack';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const SelectPage = () => {
  const { register, watch } = useForm();
  const checkedValue = watch('select7');

  return (
    <div className="docs">
      <div className="docs-select">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>FormsSelect 컴포넌트를 통해 셀렉트 요소를 생성합니다.</Text>
          <div className="preview">
            <FormsSelect id="select1" title="선택 예제" options={['옵션 1번', '옵션 2번', '옵션 3번']} />
          </div>
          <CodeContainer codeString={selectCode.overview} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="2. Disabled" />
          <Text>Disabled 프로퍼티를 통해 비활성화를 지정합니다. 기본값은 &#39;false&#39; 입니다.</Text>
          <div className="preview">
            <Stack gap={4}>
              <FormsSelect id="select2" title="선택 예제" options={['옵션 1번', '옵션 2번', '옵션 3번']} />
              <FormsSelect id="select3" title="선택 예제" options={['옵션 1번', '옵션 2번', '옵션 3번']} disabled />
            </Stack>
          </div>
          <CodeContainer codeString={selectCode.disabled} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="3. State" />
          <Text>
            State 프로퍼티를 통해 FormsSelect 컴포넌트의 상태를 지정합니다. &#39;valid&#39;는 완료 상태,
            &#39;invalid&#39;는 에러 상태를 나타냅니다.
          </Text>
          <div className="preview">
            <Stack gap={4}>
              <FormsSelect id="select4" title="선택 예제" options={['옵션 1번', '옵션 2번', '옵션 3번']} />
              <FormsSelect
                id="select5"
                title="선택 예제"
                state="valid"
                options={['옵션 1번', '옵션 2번', '옵션 3번']}
              />
              <FormsSelect
                id="select6"
                title="선택 예제"
                state="invalid"
                options={['옵션 1번', '옵션 2번', '옵션 3번']}
              />
            </Stack>
          </div>
          <CodeContainer codeString={selectCode.state} />
        </div>
        <div className="component-content">
          <Heading level="h2" size={2} text="4. Watch" />
          <Text>Watch를 통해 해당 유저가 선택한 Select의 상태 값을 알 수 있습니다.</Text>
          <div className="preview">
            <Stack direction="col" gap={4}>
              <Stack gap={4}>
                <FormsSelect
                  id="select7"
                  title="선택 예제"
                  options={['옵션 1번', '옵션 2번', '옵션 3번']}
                  {...register('select7')}
                />
              </Stack>
              <Text>
                선택한 값 :
                <Text tag="span" weight="bold">
                  {checkedValue === undefined ? 'Not Select' : checkedValue}
                </Text>
              </Text>
            </Stack>
          </div>
          <CodeContainer codeString={selectCode.watch} />
        </div>
      </div>
    </div>
  );
};

const selectCode = {
  overview: [
    `<!-- Default Select -->`,
    `<FormsSelect id="select1" title="선택 예제" options={['옵션 1번', '옵션 2번', '옵션 3번']} />`,
  ].join('\n'),
  disabled: [
    `<!-- Default Select -->`,
    `<FormsSelect id="select2" title="선택 예제" options={['옵션 1번', '옵션 2번', '옵션 3번']} />`,
    '',
    `<!-- Disabled Select -->`,
    `<FormsSelect id="select3" title="선택 예제" options={['옵션 1번', '옵션 2번', '옵션 3번']} disabled />`,
  ].join('\n'),
  state: [
    `<!-- Default Select -->`,
    `<FormsSelect id="select4" title="선택 예제" options={['옵션 1번', '옵션 2번', '옵션 3번']} />`,
    ``,
    `<!-- Valid Select -->`,
    `<FormsSelect id="select5" title="선택 예제" state="valid" options={['옵션 1번', '옵션 2번', '옵션 3번']} />`,
    ``,
    `<!-- InValid Select -->`,
    `<FormsSelect id="select6" title="선택 예제" state="invalid" options={['옵션 1번', '옵션 2번', '옵션 3번']} />`,
  ].join('\n'),
  watch: [
    `<!-- Script -->`,
    `const { register, watch } = useForm();`,
    `const checkedValue = watch('select7');`,
    ``,
    ` <FormsSelect id="select7" title="선택 예제" options={['옵션 1번', '옵션 2번', '옵션 3번']} {...register('select7')} />`,
  ].join('\n'),
};

export default SelectPage;
