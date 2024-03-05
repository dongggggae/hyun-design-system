'use client';

import React, { useState, useEffect } from 'react';

import classNames from '@utils/classNames';

import { AccordionStateContext } from './AccordionContext';
import AccordionHeader from './AccordionHeader';
import AccordionBody from './AccorionBody';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  useEffect(() => {
    setCollapsed(!isOpen);
  }, [isOpen]);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const accordionStateValue = {
    toggleCollapse: toggleCollapse,
  };

  return (
    <AccordionStateContext.Provider value={accordionStateValue}>
      <div className={classNames('accordion__item', isCollapsed ? 'collapsed' : '')}>
        <AccordionHeader title={title} />
        <AccordionBody>{children}</AccordionBody>
      </div>
    </AccordionStateContext.Provider>
  );
};

export default AccordionItem;
