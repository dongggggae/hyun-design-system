'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import Btn from '@components/Btn/Btn';
import FormsCheck from '@components/Forms/FormsCheck';

const SwitchPage = () => {
  const { register, control, handleSubmit } = useForm();

  return (
    <div className="docs">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormsCheck id="switch" type="switch" {...register('switch3')} />
        <FormsCheck id="switch2" type="switch" {...register('switch4')} />
        <Btn type="submit" text="제출" />
      </form>
    </div>
  );
};

export default SwitchPage;
