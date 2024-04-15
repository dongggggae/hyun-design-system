import React, { LabelHTMLAttributes, forwardRef } from 'react';

import classNames from '@utils/classNames';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  className?: string | undefined;
}

const FormsLabel = forwardRef<HTMLLabelElement, LabelProps>(({ htmlFor, ...props }, ref) => {
  const PREFIX = 'form__label';

  return <label htmlFor={htmlFor} ref={ref} className={classNames(PREFIX)} {...props} />;
});

FormsLabel.displayName = 'FormsLabel';

export default FormsLabel;
