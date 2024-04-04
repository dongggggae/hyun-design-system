'use client';
import React from 'react';

import classNames from '@utils/classNames';

import AccordionItem from './AccordionItem';

interface AccorionProps {
  children: React.ReactNode;
  className?: string | string[];
}

const Accordion: React.FC<AccorionProps> = ({ children, className }) => {
  const PREFIX = 'accordion';

  return (
    <div className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}>{children}</div>
  );
};

export default Object.assign(Accordion, {
  Item: AccordionItem,
});
