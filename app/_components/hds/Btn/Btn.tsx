import React from 'react';
import classNames from '@utils/classNames';
import BtnText from './Text';

interface ButtonProps {
  text: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'slolid-grren' | 'solid-red' | 'outline-green' | 'outline-gray' | 'link';
  onClick?: () => void;
}

const Btn: React.FC<ButtonProps> = ({ text, size, type, onClick }) => {
  const PREFIX = 'btn';

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={classNames(PREFIX, size && `${PREFIX}--${size}`, type && `${PREFIX}--${type}`)}
      onClick={handleClick}
    >
      <BtnText text={text} />
    </button>
  );
};

export default Btn;
