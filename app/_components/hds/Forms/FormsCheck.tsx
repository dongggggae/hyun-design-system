import React, { forwardRef } from 'react';

import classNames from '@utils/classNames';

interface InputCheckProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  type?: string;
  checkd?: boolean;
  className?: string | undefined;
}

const FormsCheck = forwardRef<HTMLInputElement, InputCheckProps>(
  ({ id, type = 'checkbox', checkd, className, ...props }, ref) => {
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
        <div className="bg-green600">aasd</div>
        <div className="bg-gray200">aasd</div>
      </div>
    );
  },
);

FormsCheck.displayName = 'FormsCheck';

export default FormsCheck;
