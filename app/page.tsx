'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import Btn from '@components/Btn/Btn';
import FormsInput from '@components/Forms/FormsInput';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="docs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormsInput id="InputText" type="text" placeholder="password" {...register('input', { required: true })} />
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
};

export default Home;
