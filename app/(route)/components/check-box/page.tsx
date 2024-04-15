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
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormsCheck id="check1" type="radio" {...register('check1', { required: 'check' })} />
        <FormsCheck id="check2" type="radio" {...register('check1', { required: 'check' })} />
        <FormsCheck id="check3" type="checkbox" {...register('check3', { required: 'check' })} />
        <FormsCheck id="check4" type="checkbox" {...register('check4', { required: 'check' })} />
        <Btn type="submit" text="제출" />
      </form>
    </div>
  );
};

export default CheckboxPage;
