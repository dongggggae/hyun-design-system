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

interface CardComponent extends React.FC<CardProps> {
  Img: typeof CardThumbnail;
  Title: typeof CardTitle;
  Text: typeof CardText;
}

const Card: CardComponent = ({ to, children, className }) => {
  const PREFIX = 'card';

  return (
    <Link href={to} className={classNames(PREFIX, Array.isArray(className) ? className.join(' ') : className)}>
      {children}
    </Link>
  );
};

Card.Img = CardThumbnail;
Card.Title = CardTitle;
Card.Text = CardText;

export default Card;
