'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Btn from '@components/Btn/Btn';
import FormsInput from '@components/Forms/FormsInput';

import { schema } from '@utils/validate';

export default function DefaultValidation() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      id: '',
      email: '',
      password: '',
      phone: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="docs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormsInput
          id="username"
          label="Username"
          value={getValues('username')}
          feedback={errors.username?.message}
          state={errors.username ? 'invalid' : ''}
          {...register('username')}
        />
        <FormsInput
          id="id"
          label="ID"
          feedback={errors.id?.message}
          state={errors.id ? 'invalid' : ''}
          {...register('id')}
        />
        <FormsInput
          id="email"
          label="Email"
          feedback={errors.email?.message}
          state={errors.email ? 'invalid' : ''}
          {...register('email')}
        />
        <FormsInput
          id="password"
          label="Password"
          feedback={errors.password?.message}
          state={errors.password ? 'invalid' : ''}
          {...register('password')}
        />
        <FormsInput
          id="phone"
          label="Phone"
          feedback={errors.phone?.message}
          state={errors.phone ? 'invalid' : ''}
          {...register('phone')}
        />

        <Btn text="Submit" variant="solid-red" className="submit-button" />
      </form>
    </div>
  );
}
