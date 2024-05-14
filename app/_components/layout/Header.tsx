'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import Heading from '@components/Typography/Heading';

const Header = () => {
  const PREFIX = 'header';

  const pathname = usePathname();
  const formattedPathname = pathname
    .split('/')
    .filter((word) => word)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' / ');

  return (
    <header className={`${PREFIX}`}>
      <div className={`${PREFIX}__inner`}>
        <Heading level="h6" size={6} text={formattedPathname === '' ? 'Home' : formattedPathname} />
      </div>
    </header>
  );
};

export default Header;
