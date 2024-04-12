'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import FormsCheck from '@components/Forms/FormsCheck';

const CheckboxPage = () => {
  const { register, control, handleSubmit } = useForm({
    mode: 'onChange',
  });

  return (
    <div className="docs">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <FormsCheck id="check" {...register('check', { required: '우라라라' })} />
        {/* <input type="checkbox" className="form__check-input" /> */}
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default CheckboxPage;
