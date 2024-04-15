import { InputHTMLAttributes, forwardRef } from 'react';

import classNames from '@utils/classNames';

import FormsLabel from './FormsLabel';

interface InputCheckProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: 'checkbox' | 'radio' | 'switch';
  label?: string;
  reverse?: boolean;
  checked?: boolean;
  className?: string | undefined;
}

const FormsCheck = forwardRef<HTMLInputElement, InputCheckProps>(
  ({ id, type, label, reverse, checked, className, ...props }, ref) => {
    const PREFIX = 'form__check';
    const isSwitch = type === 'switch';

    return (
      <div className={classNames(PREFIX, isSwitch ? 'form__switch' : '', reverse ? 'reverse' : '')}>
        {reverse && label && <FormsLabel htmlFor={id}>{label}</FormsLabel>}
        <input
          id={id}
          ref={ref}
          type={isSwitch ? 'checkbox' : type}
          role={type}
          checked={checked}
          className={classNames(`${PREFIX}-input`, className)}
          {...props}
        />
        {!reverse && label && <FormsLabel htmlFor={id}>{label}</FormsLabel>}
      </div>
    );
  },
);

FormsCheck.displayName = 'FormsCheck';

export default FormsCheck;
