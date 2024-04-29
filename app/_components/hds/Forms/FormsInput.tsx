import React, { useState, InputHTMLAttributes, forwardRef } from 'react';

import classNames from '@utils/classNames';

import FormsAddon from './FormsAddon';
import useInput from './FormsContext';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: 'text' | 'password' | 'search';
  state?: '' | 'valid' | 'invalid';
  placeholder?: string;
  disabled?: boolean;
  className?: string | undefined;
}
const FormsInput = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type = 'text', state = '', placeholder, disabled, className, ...props }, ref) => {
    const PREFIX = 'form__control';

    const { inputText, onChange } = useInput();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    const clearInput = () => {
      onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
    };

    const rederAddon = () => {
      switch (type) {
        case 'text':
          return inputText.length > 0 ? <FormsAddon field="clear" onClick={clearInput} /> : null;
        case 'search':
          return <FormsAddon field="search" />;
        case 'password':
          return inputText.length > 0 ? (
            <FormsAddon field={passwordVisible ? 'visible' : 'invisible'} onClick={togglePasswordVisibility} />
          ) : null;
        default:
          return null;
      }
    };

    const inputType = type === 'password' && passwordVisible ? 'text' : type;

    return (
      <div
        className={classNames(
          'input-wrap',
          state === 'valid' ? 'is-valid' : '',
          state === 'invalid' ? 'is-invalid' : '',
        )}
      >
        <input
          id={id}
          ref={ref}
          type={inputType}
          value={inputText}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={PREFIX}
          {...props}
        />
        {rederAddon()}
      </div>
    );
  },
);

FormsInput.displayName = 'FormsInput';

export default FormsInput;
