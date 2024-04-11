import React, { forwardRef } from 'react';

import classNames from '@utils/classNames';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string | undefined;
}

const FormsInput = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, placeholder, disabled, className, ...props }, ref) => {
    const PREFIX = 'form__control';

    return (
      <div className="input-wrap">
        <input
          id={id}
          ref={ref}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}
          {...props}
        />
      </div>
    );
  },
);

FormsInput.displayName = 'FormsInput';

export default FormsInput;
