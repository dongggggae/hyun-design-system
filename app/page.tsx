'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import FormsInput from '@components/Forms/FormsInput';

import Btn from '@components/Btn/Btn';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const createChallenge = (data) => {
    console.log(data);
  };

  return (
    <div className="docs">
      <form onSubmit={handleSubmit(createChallenge)}>
        <FormsInput id="InputText" type="text" placeholder="password" {...register('input', { required: true })} />
        <FormsInput id="InputText" type="text" placeholder="password" {...register('input', { required: true })} />
        <FormsInput id="InputText" type="text" placeholder="password" {...register('input', { required: true })} />F
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
};

export default Home;
