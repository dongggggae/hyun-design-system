'use client';
import React from 'react';

import Icon from '@components/Icon/Icon';

import classNames from '@utils/classNames';

import BtnText from './Text';

interface ButtonProps {
  text?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'slolid-grren' | 'solid-red' | 'outline-green' | 'outline-gray' | 'link';
  type?: 'button' | 'reset' | 'submit' | undefined;
  icon?: string;
  iconOnly?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string | string[];
}

const Btn: React.FC<ButtonProps> = ({
  text,
  size,
  variant,
  type,
  icon,
  iconOnly,
  children,
  disabled,
  onClick,
  className,
}) => {
  const PREFIX = 'btn';

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={classNames(
        PREFIX,
        size && `${PREFIX}--${size}`,
        variant && `${PREFIX}--${variant}`,
        Array.isArray(className) ? className.join(' ') : className,
      )}
      disabled={disabled}
      type={type}
      onClick={handleClick}
    >
      {!icon && <BtnText text={text} />}

      {icon && iconOnly && <Icon name={icon} />}

      {icon && !iconOnly && (
        <React.Fragment>
          <BtnText text={text} />
          <Icon name={icon} />
        </React.Fragment>
      )}

      {children && !iconOnly && <React.Fragment>{children}</React.Fragment>}
    </button>
  );
};

export default Btn;
