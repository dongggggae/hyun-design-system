import React, { forwardRef, InputHTMLAttributes } from 'react';

import classNames from '@utils/classNames';

import FormsFeedback from './FormsFeedback';
import FormsLabel from './FormsLabel';

interface FormsInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value?: any;
  type?: 'text' | 'password' | 'search';
  state?: '' | 'valid' | 'invalid';
  placeholder?: string;
  disalbed?: boolean;
  feedback?: string;
  className?: string | undefined;
}

const FormsInput = forwardRef<HTMLInputElement, FormsInputProps>(
  ({ id, label, type = 'text', state = '', placeholder, disabled, feedback, className, value, ...props }, ref) => {
    const PREFIX = 'form__control';

    return (
      <div className="forms-wrap">
        {label && <FormsLabel htmlFor={id}>{label}</FormsLabel>}
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
        {feedback && <FormsFeedback state={state}>{feedback}</FormsFeedback>}
      </div>
    );
  },
);

FormsInput.displayName = 'FormsInput';

export default FormsInput;
