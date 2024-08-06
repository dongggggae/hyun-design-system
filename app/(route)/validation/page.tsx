'use client';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFieldArray } from 'react-hook-form';

import FormsFeedback from '@components/Forms/FormsFeedback';
import FormsInput from '@components/Forms/FormsInput';
import FormsLabel from '@components/Forms/FormsLabel';
import Input from '@components/Forms/Input';

import { schema } from '@utils/validate';

type FormValues = {
  username: string;
};

export default function ValidationPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isDirty, dirtyFields, isSubmitted },
  } = useForm<FormValues>({
    defaultValues: {
      username: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="docs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormsInput
          id="username"
          label="Label"
          feedback={errors.username?.message}
          state="invalid"
          {...register('username')}
        />

        <DevTool control={control} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
