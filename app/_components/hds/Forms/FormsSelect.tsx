import { SelectHTMLAttributes, forwardRef } from 'react';

import classNames from '@utils/classNames';

interface FormsSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: string[];
  title: string;
  state?: '' | 'valid' | 'invalid';
  disabled?: boolean;
  className?: string | undefined;
}

const FormsSelect = forwardRef<HTMLSelectElement, FormsSelectProps>(
  ({ id, options, title, state = '', disabled, className, ...props }, ref) => {
    const PREFIX = 'form__select';

    return (
      <select
        id={id}
        ref={ref}
        title={title}
        disabled={disabled}
        className={classNames(PREFIX, state === 'valid' ? 'is-valid' : '', state === 'invalid' ? 'is-invalid' : '')}
        {...props}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  },
);

FormsSelect.displayName = 'FormsSelect';

export default FormsSelect;
