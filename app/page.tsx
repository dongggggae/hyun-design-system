'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import FormsSelect from '@components/Forms/FormsSelect';

const Home = () => {
  const { register, watch } = useForm();
  const checkValues = watch('select');

  return (
    <div className="docs">
      <FormsSelect id="select" title="폼셀렉트" options={['가나다', '간다', '온다']} {...register('select')} />
    </div>
  );
};

export default Home;
