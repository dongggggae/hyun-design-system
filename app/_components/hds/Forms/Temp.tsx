import React, { useState, useRef, forwardRef } from 'react';

import classNames from '@utils/classNames';

import FormsAddon from './FormsAddon';
// import useInput from './FormsContext';

interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string | string[];
}

const Temp: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, type, placeholder, disabled, className, ...props },
  ref,
) => {
  const PREFIX = 'form__control';

  const { inputText, onChange } = useInput();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const clearInput = () => {
    onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  const renderAddon = () => {
    switch (type) {
      case 'text':
        return inputText.length > 0 ? <FormsAddon field="clear" onClick={clearInput} /> : null;
      case 'search':
        return inputText.length > 0 ? <FormsAddon field="search" /> : null;
      case 'password':
        return <FormsAddon field={passwordVisible ? 'visible' : 'invisible'} onClick={togglePasswordVisibility} />;
      default:
        return null;
    }
  };

  const inputType = type === 'password' && passwordVisible ? 'text' : type;

  return (
    <div className="input-wrap">
      <input
        id={id}
        type={inputType}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        value={inputText}
        {...props}
        className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}
      />
      {renderAddon()}
    </div>
  );
};

export default forwardRef(Temp);
