'use client';
import React, { useEffect } from 'react';
import classNames from '@utils/classNames';
import { createPortal } from 'react-dom';
import { ModalStateContext, ModalModifyContext } from './ModalContext';
import Dialog from './Dialog';
import Content from './Content';
import Header from './Header';
import Body from './Body';

import Footer from './Footer';

interface ModalProps {
  modalKey: string;
  show: boolean;
  onHide: () => void;
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  type?: 'center' | 'scrollable' | 'fullscreen';
  className?: string | string[];
}

const Modal: React.FC<ModalProps> = ({ show, onHide, children, size, type, className }) => {
  const handleClose = () => {
    onHide();
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  const modalStateValue = {
    handleClose: handleClose,
  };

  const modalModifyValue = {
    size: size || 'md',
    type: type || '',
  };

  return (
    <ModalStateContext.Provider value={modalStateValue}>
      <ModalModifyContext.Provider value={modalModifyValue}>
        <div
          className={classNames(
            'modal',
            show ? 'show' : '',
            Array.isArray(className) ? className.join(' ') : className,
          )}
        >
          <Dialog>
            <Content>{children}</Content>
          </Dialog>
        </div>
      </ModalModifyContext.Provider>
    </ModalStateContext.Provider>
  );
};

Modal.displayName = 'Modal';

export default Object.assign(Modal, {
  Header: Header,
  Body: Body,
  Footer: Footer,
});
