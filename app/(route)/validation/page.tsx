'use client';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFieldArray } from 'react-hook-form';

import Input from '@components/Forms/Input';
import FormsFeedback from '@components/Forms/FormsFeedback';
import FormsLabel from '@components/Forms/FormsLabel';
import FormsInput from '@components/Forms/FormsInput';

import { schema } from '@utils/validate';

type FormValues = {
  username: string;
  email: string;
  password: string;
  // social: {
  //   github: string;
  //   twitter: string;
  // };
  // phoneNumbers: string[];
  // phNumbers: {
  //   number: string;
  // }[];
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
      email: '',
      password: '',
      // email: '',
      // social: {
      //   github: '',
      //   twitter: '',
      // },
      // phoneNumbers: ['', ''],
      // phNumbers: [{ number: '' }],
    },
    mode: 'onBlur',
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = (data: any) => {
    console.log(errors);
  };

  return (
    <div className="docs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormsInput id="username" label="라벨" feedback={errors.username?.message} {...register('username')} />
        {!!errors.username}
        {/* <div>
          <label htmlFor="userName">UserName</label>
          <input type="text" id="username" {...register('username')} />
          <p>{errors.username?.message}</p>
        </div> */}
        {/* <div>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" id="password" {...register('password')} />
          <p>{errors.password?.message}</p>
        </div> */}
        {/* 
        <div>
          <label htmlFor="github">Github</label>
          <input type="text" id="github" {...register('social.github')} />
        </div>
        <div>
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register('social.twitter')} />
        </div>
        <div>
          <label htmlFor="wired">Wired phone</label>
          <input type="text" id="wired" {...register('phoneNumbers.0')} />
        </div>
        <div>
          <label htmlFor="wireless">Wireless</label>
          <input type="text" id="wireless" {...register('phoneNumbers.1')} />
        </div>
        <div>
          <label>List of Phone Numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <input type="text" {...register(`phNumbers.${index}.number`)} />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ number: '' })}>
              Add phone number
            </button>
          </div>
        </div> */}

        <DevTool control={control} />
        <button>Submit</button>
      </form>
    </div>
  );
}
