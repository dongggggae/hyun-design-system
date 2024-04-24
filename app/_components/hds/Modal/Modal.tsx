'use client';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import classNames from '@utils/classNames';

import Body from './Body';
import Content from './Content';
import Dialog from './Dialog';
import Footer from './Footer';
import Header from './Header';
import { ModalStateContext, ModalModifyContext } from './ModalContext';

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
  const PREFIX = 'modal';

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

  const selectedElement = document.getElementById('modal-root');
  if (selectedElement === null) {
    return <div></div>;
  }

  return (
    <React.Fragment>
      {createPortal(
        <ModalStateContext.Provider value={modalStateValue}>
          <ModalModifyContext.Provider value={modalModifyValue}>
            <div
              className={classNames(
                PREFIX,
                show ? 'show' : '',
                Array.isArray(className) ? className.join(' ') : className,
              )}
            >
              <Dialog>
                <Content>{children}</Content>
              </Dialog>
            </div>
          </ModalModifyContext.Provider>
        </ModalStateContext.Provider>,
        selectedElement as HTMLDivElement,
      )}
    </React.Fragment>
  );
};

Modal.displayName = 'Modal';

export default Object.assign(Modal, {
  Header: Header,
  Body: Body,
  Footer: Footer,
});
