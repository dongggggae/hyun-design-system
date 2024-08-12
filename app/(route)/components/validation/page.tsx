'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Btn from '@components/Btn/Btn';
import FormsInput from '@components/Forms/FormsInput';
import Table from '@components/Table/Table';
import Heading from '@components/Typography/Heading';
import Text from '@components/Typography/Text';

import { schema } from '@utils/validate';

export default function DefaultValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="docs">
      <div className="docs-validation">
        <div className="component-content">
          <Heading level="h2" size={2} text="1. 개요" />
          <Text>ReactHookForm과 Yup 라이브러리를 통해 Form 유효성 검사를 실행합니다.</Text>
          <div className="preview fill">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Table caption="Validation Table">
                <Table.Body>
                  <Table.Row>
                    <Table.HeaderCell>Input</Table.HeaderCell>
                    <Table.DataCell>
                      <FormsInput
                        id="input"
                        placeholder="Input"
                        feedback={errors.input?.message}
                        state={errors.input ? 'invalid' : ''}
                        {...register('input')}
                      />
                    </Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.DataCell>
                      <FormsInput
                        id="name"
                        placeholder="Name"
                        feedback={errors.name?.message}
                        state={errors.name ? 'invalid' : ''}
                        {...register('name')}
                      />
                    </Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Korean Name</Table.HeaderCell>
                    <Table.DataCell>
                      <FormsInput
                        id="nameKo"
                        placeholder="Korean Name"
                        feedback={errors.nameKo?.message}
                        state={errors.nameKo ? 'invalid' : ''}
                        {...register('nameKo')}
                      />
                    </Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Emglish Name</Table.HeaderCell>
                    <Table.DataCell>
                      <FormsInput
                        id="nameEng"
                        placeholder="Emglish Name"
                        feedback={errors.nameEng?.message}
                        state={errors.nameEng ? 'invalid' : ''}
                        {...register('nameEng')}
                      />
                    </Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.DataCell>
                      <FormsInput
                        id="id"
                        placeholder="ID"
                        feedback={errors.id?.message}
                        state={errors.id ? 'invalid' : ''}
                        {...register('id')}
                      />
                    </Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Password</Table.HeaderCell>
                    <Table.DataCell>
                      <FormsInput
                        id="password"
                        type="password"
                        feedback={errors.password?.message}
                        state={errors.password ? 'invalid' : ''}
                        {...register('password')}
                      />
                    </Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Password Confirm</Table.HeaderCell>
                    <Table.DataCell>
                      <FormsInput
                        id="passwordConfirm"
                        type="password"
                        feedback={errors.passwordConfirm?.message}
                        state={errors.passwordConfirm ? 'invalid' : ''}
                        {...register('passwordConfirm')}
                      />
                    </Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.DataCell>
                      <FormsInput
                        id="email"
                        feedback={errors.email?.message}
                        state={errors.email ? 'invalid' : ''}
                        {...register('email')}
                      />
                    </Table.DataCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Phone</Table.HeaderCell>
                    <Table.DataCell>
                      <FormsInput
                        id="phone"
                        feedback={errors.phone?.message}
                        state={errors.phone ? 'invalid' : ''}
                        {...register('phone')}
                      />
                    </Table.DataCell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Btn text="Submit" variant="solid-red" className="submit-button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
