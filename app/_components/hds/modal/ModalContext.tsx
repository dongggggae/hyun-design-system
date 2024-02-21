'use client';
import { createContext, useContext } from 'react';

type State = {
  handleClose: () => void;
};

type Modify = {
  size: string;
  type: string;
};

const ModalStateContext = createContext<State | null>(null);
const ModalModifyContext = createContext<Modify | null>(null);

export function useModalState(): State {
  const state = useContext(ModalStateContext);
  if (!state) throw new Error('Not Found useModalState');

  return state;
}

export function useModalModify(): Modify {
  const modify = useContext(ModalModifyContext);
  if (!modify) throw new Error('Not Found useModalModify');

  return modify;
}

export { ModalStateContext, ModalModifyContext };
