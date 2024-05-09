'use client';
import { DevTool } from '@hookform/devtools';
import { useForm, useFieldArray } from 'react-hook-form';

type FormValues = {
  username: string;
  email: string;
  social: {
    github: string;
    twitter: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
};

export default function ValidationPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      username: 'IU',
      email: '',
      social: {
        github: '',
        twitter: '',
      },
      phoneNumbers: ['', ''],
      phNumbers: [{ number: '' }],
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control: control,
  });

  return (
    <div className="docs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userName">UserName</label>
          <input type="text" id="username" {...register('username')} />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" {...register('email')} />
        </div>
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
        </div>
        <button>Submit</button>
        <DevTool control={control} />
      </form>
    </div>
  );
}
