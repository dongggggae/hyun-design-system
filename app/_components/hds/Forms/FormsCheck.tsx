import React, { forwardRef } from 'react';

import classNames from '@utils/classNames';

interface InputCheckProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  type?: 'checkbox' | 'radio';
  checkd?: boolean;
  className?: string | undefined;
}

const FormsCheck = forwardRef<HTMLInputElement, InputCheckProps>(({ id, type, checkd, className, ...props }, ref) => {
  const PREFIX = 'form__check';

  return (
    <div className={classNames(PREFIX)}>
      <input
        id={id}
        ref={ref}
        type={type}
        checked={checkd}
        className={classNames(`${PREFIX}-input`, className)}
        {...props}
      />
    </div>
  );
});

FormsCheck.displayName = 'FormsCheck';

export default FormsCheck;
