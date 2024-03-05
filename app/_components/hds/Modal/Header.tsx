import React from 'react';

import classNames from '@utils/classNames';

import Title from './Title';

interface ModalHeaderProps {
  title: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  close?: boolean;
}

const Header: React.FC<ModalHeaderProps> = ({ title, size, close }) => {
  return (
    <div className={classNames('modal__header')}>
      <Title text={title} size={size} />
    </div>
  );
};

export default Header;
