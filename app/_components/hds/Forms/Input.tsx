import React, { InputHTMLAttributes, forwardRef } from 'react';

import classNames from '@utils/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: 'text' | 'password' | 'search';
  state?: '' | 'valid' | 'invalid';
  placeholder?: string;
  disalbed?: boolean;
  className?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type = 'text', state = '', placeholder, disabled, className, ...props }, ref) => {
    const PREFIX = 'form__control';

    return (
      <div
        className={classNames(
          'input-wrap',
          state === 'valid' ? 'is-valid' : '',
          state === 'invalid' ? 'is-invalid' : '',
          className,
        )}
      >
        <input
          id={id}
          ref={ref}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={PREFIX}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
