import React from 'react';

import Icon from '@components/Icon/Icon';

import classNames from '@utils/classNames';

import { useModalState } from './ModalContext';
import Title from './Title';

interface ModalHeaderProps {
  title: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  close?: boolean;
}

const Header: React.FC<ModalHeaderProps> = ({ title, size, close }) => {
  const { handleClose } = useModalState();

  return (
    <div className={classNames('modal__header')}>
      <Title text={title} size={size} />
      {close ? (
        <React.Fragment>
          <button onClick={handleClose}>
            <Icon name="close" />
          </button>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Header;
