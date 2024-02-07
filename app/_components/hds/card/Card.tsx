import React, { Children } from 'react';
import Link from 'next/link';
import CardThumbnail from './CardThumbnail';
import CardText from './CardText';
import CardTitle from './CardTitle';

interface CardProps {
  to: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ to, children }) => {
  const PREFIX = 'card';
  return (
    <Link href={to} className={PREFIX}>
      {children}
    </Link>
  );
};

export default Object.assign(Card, {
  Img: CardThumbnail,
  Title: CardTitle,
  Text: CardText,
});
