import React from 'react';
import Link from 'next/link';
import CardThumbnail from './CardThumbnail';
import CardText from './CardText';
import CardTitle from './CardTitle';
import className from '@utils/classNames';

interface CardProps {
  to: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ to, children }) => {
  return (
    <Link href={to} className={className('card')}>
      {children}
    </Link>
  );
};

export default Object.assign(Card, {
  Img: CardThumbnail,
  Title: CardTitle,
  Text: CardText,
});