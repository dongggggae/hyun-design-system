import { createContext, useContext } from 'react';

type State = {
  aaa: () => void;
};

type Modify = {
  fill: boolean;
  type: string;
};

const TabStateContext = createContext<State | null>(null);
const TabModifyContext = createContext<Modify | null>(null);

export function useTabState(): State {
  const state = useContext(TabStateContext);
  if (!state) throw new Error('Not Found useTabState');

  return state;
}

export function useTabModify(): Modify {
  const modify = useContext(TabModifyContext);
  if (!modify) throw new Error('Not Found useTabModify');

  return modify;
}

export { TabStateContext, TabModifyContext };
