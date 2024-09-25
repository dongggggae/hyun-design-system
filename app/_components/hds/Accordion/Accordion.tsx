'use client';
import React from 'react';

import classNames from '@utils/classNames';

import AccordionItem from './AccordionItem';

import '@styles/hds.scss';
interface AccorionProps {
  children: React.ReactNode;
  className?: string | string[];
}

interface AccordionComponent extends React.FC<AccorionProps> {
  Item: typeof AccordionItem;
}

const Accordion: AccordionComponent = ({ children, className }) => {
  const PREFIX = 'accordion';

  return (
    <div className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}>{children}</div>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
