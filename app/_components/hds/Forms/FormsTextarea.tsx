import { TextareaHTMLAttributes, forwardRef } from 'react';

import classNames from '@utils/classNames';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  state?: '' | 'valid' | 'invalid';
  placeholder?: string;
  disabled?: boolean;
  className?: string | undefined;
}

const FormsTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, state = '', placeholder, disabled, className, ...props }, ref) => {
    const PREFIX = 'textarea-wrap';

    return (
      <div
        className={classNames(
          PREFIX,
          className,
          state === 'valid' ? 'is-valid' : '',
          state === 'invalid' ? 'is-invalid' : '',
        )}
      >
        <textarea id={id} ref={ref} disabled={disabled} className={classNames('form__control')} {...props} />
      </div>
    );
  },
);

FormsTextarea.displayName = 'FormsTextarea';

export default FormsTextarea;
