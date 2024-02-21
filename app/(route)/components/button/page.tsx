'use client';
import React from 'react';
import Modal from '@components/modal/Modal';
import { useState } from 'react';

interface ModalState {
  [key: string]: boolean;
}

const ButtonPage: React.FC = () => {
  const [modals, setModals] = useState<ModalState>({});

  const toggleLayerVisible = (modalKey: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalKey]: !prevModals[modalKey],
    }));
  };

  return (
    <div className="docs">
      <button onClick={() => toggleLayerVisible('modal1')}>Default Modal</button>
      <Modal show={modals.modal1} type="fullscreen" onHide={() => toggleLayerVisible('modal1')} modalKey={'modal1'}>
        <Modal.Header title="modal" />
        <Modal.Body>aaaa</Modal.Body>
        <Modal.Footer>
          <button onClick={() => toggleLayerVisible('modal1')}>모달 끄기</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ButtonPage;
