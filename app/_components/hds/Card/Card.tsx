import Link from 'next/link';
import React from 'react';

import classNames from '@utils/classNames';

import CardText from './CardText';
import CardThumbnail from './CardThumbnail';
import CardTitle from './CardTitle';

interface CardProps {
  to: string;
  children: React.ReactNode;
  className?: string | string[];
}

const Card: React.FC<CardProps> = ({ to, children, className }) => {
  const PREFIX = 'card';

  return (
    <Link href={to} className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}>
      {children}
    </Link>
  );
};

export default Object.assign(Card, {
  Img: CardThumbnail,
  Title: CardTitle,
  Text: CardText,
});
