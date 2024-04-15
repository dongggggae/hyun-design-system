'use client';
import { DevTool } from '@hookform/devtools';
import React from 'react';
import { useForm } from 'react-hook-form';

import Btn from '@components/Btn/Btn';
import FormsInput from '@components/Forms/FormsInput';

const TextFiledPage = () => {
  const { register, control, handleSubmit } = useForm({
    mode: 'onChange',
  });

  return (
    <div className="docs">
      TextFiledPage
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormsInput id="test" type="text" placeholder="테스트" {...register('test', { required: '우라라라' })} />
        <Btn type="submit" text="제출" />
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default TextFiledPage;
