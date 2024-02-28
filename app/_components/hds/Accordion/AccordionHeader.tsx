import React from 'react';

import { useAccordionState } from './AccordionContext';

interface AccordionHeaderProps {
  title: string;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ title }) => {
  const { toggleCollapse } = useAccordionState();

  return (
    <button className={'accordion__header'} onClick={toggleCollapse}>
      {title}
    </button>
  );
};

export default AccordionHeader;
