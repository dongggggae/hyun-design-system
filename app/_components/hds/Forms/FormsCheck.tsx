import { InputHTMLAttributes, forwardRef } from 'react';

import classNames from '@utils/classNames';

interface InputCheckProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type?: 'checkbox' | 'radio' | 'switch';
  checked?: boolean;
  className?: string | undefined;
}

const FormsCheck = forwardRef<HTMLInputElement, InputCheckProps>(({ id, type, checked, className, ...props }, ref) => {
  const PREFIX = 'form__check';
  const isSwitch = type === 'switch';

  return (
    <div className={classNames(PREFIX, isSwitch ? 'form__switch' : '')}>
      <input
        id={id}
        ref={ref}
        type={isSwitch ? 'checkbox' : type}
        role={type}
        checked={checked}
        className={classNames(`${PREFIX}-input`, className)}
        {...props}
      />
    </div>
  );
});

FormsCheck.displayName = 'FormsCheck';

export default FormsCheck;
