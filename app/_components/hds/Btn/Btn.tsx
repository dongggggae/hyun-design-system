'use client';
import React from 'react';
import classNames from '@utils/classNames';
import BtnText from './Text';

interface ButtonProps {
  text: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'slolid-grren' | 'solid-red' | 'outline-green' | 'outline-gray' | 'link';
  onClick?: () => void;
  className?: string | string[];
}

const Btn: React.FC<ButtonProps> = ({ text, size, type, onClick, className }) => {
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
        type && `${PREFIX}--${type}`,
        Array.isArray(className) ? className.join(' ') : className,
      )}
      onClick={handleClick}
    >
      <BtnText text={text} />
    </button>
  );
};

export default Btn;
