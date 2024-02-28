
import { createContext, useContext } from 'react';

type State = {
  toggleCollapse: () => void;
};

const AccordionStateContext = createContext<State | null>(null);

export function useAccordionState(): State {
  const state = useContext(AccordionStateContext);

  if (!state) throw new Error('Not Found useAccordionState');

  return state;
}

export { AccordionStateContext };
