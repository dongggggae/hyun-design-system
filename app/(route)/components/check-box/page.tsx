'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import Btn from '@components/Btn/Btn';
import FormsCheck from '@components/Forms/FormsCheck';

const CheckboxPage = () => {
  const { register, control, handleSubmit } = useForm({
    mode: 'onChange',
  });

  return (
    <div className="docs">
      <FormsCheck id="check2" type="radio" {...register('check1', { required: 'check' })} label="2번 checkBox" />
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
      />
    </div>
  );
};

export default CheckboxPage;
