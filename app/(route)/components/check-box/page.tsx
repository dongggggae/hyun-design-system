'use client';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import FormsCheck from '@components/Forms/FormsCheck';
import Stack from '@components/Stack/Stack';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

const CodeContainer = dynamic(() => import('@docs/CodeContainer'));

const CheckboxPage = () => {
  const { register, watch } = useForm();
  const checkedValues = watch(['checkBox1', 'checkBox2']);

  return (
    <div className="docs">
      <div className="docs-checkBox">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>FormsCheck 컴포넌트를 통해 체크박스 요소를 생성합니다.</Text>
          <div className="preview">
            <form>
              <Stack direction="col" gap={4}>
                <Stack gap={4}>
                  <FormsCheck id="checkBox1" type="checkbox" label="checkBox1" {...register('checkBox1')} />
                  <FormsCheck id="checkBox2" type="checkbox" label="checkBox2" {...register('checkBox2')} />
                </Stack>
              </Stack>
            </form>
          </div>
        </div>
      </div>
      {/* <FormsCheck id="check2" type="radio" {...register('check1', { required: 'check' })} label="2번 checkBox" />
      <FormsCheck
        id="check1"
        reverse
        type="radio"
        {...register('check1', { required: 'check' })}
        label="1번 checkBox"
      />
      <FormsCheck
        id="check3"
        reverse
        type="checkbox"
        {...register('check3', { required: 'check' })}
        label="3번 checkBox"
      />
      <FormsCheck
        id="check4"
        reverse
        type="checkbox"
        {...register('check4', { required: 'check' })}
        label="4번 checkBox"
      /> */}
    </div>
  );
};

export default CheckboxPage;
