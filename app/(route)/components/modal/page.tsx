'use client';
import React from 'react';
import { useState } from 'react';

import Btn from '@components/Btn/Btn';
import Modal from '@components/Modal/Modal';

import classNames from '@utils/classNames';

interface ModalState {
  [key: string]: boolean;
}

const ModalPage = () => {
  const [modals, setModals] = useState<ModalState>({});

  const toggleLayerVisible = (modalKey: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalKey]: !prevModals[modalKey],
    }));
  };

  return (
    <div className="docs">
      <Btn onClick={() => toggleLayerVisible('modal1')} text="modal open" />

      <Modal show={modals.modal1} onHide={() => toggleLayerVisible('modal1')} modalKey={'modal1'}>
        <Modal.Header title="modal" close />
        <Modal.Body>aaaa</Modal.Body>
        <Modal.Footer>
          <Btn onClick={() => toggleLayerVisible('modal1')} text="modal close" />
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalPage;
