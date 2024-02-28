'use client';
import React from 'react';
import classNames from '@utils/classNames';

interface AccorionProps {
  children: React.ReactNode;
  className?: string | string[];
}

const Accorion: React.FC<AccorionProps> = ({ children, className }) => {
  const PREFIX = 'accordion';
  return (
    <div className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}>{children}</div>
  );
};

export default Accorion;
