import React from 'react';
import Link from 'next/link';
import CardThumbnail from './CardThumbnail';
import CardText from './CardText';
import CardTitle from './CardTitle';
import classNames from '@utils/classNames';

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
