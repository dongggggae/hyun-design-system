import className from '@utils/classNames';
import React from 'react';

const CardText: React.FC<{ text: string }> = ({ text }) => {
  return <span className={className('card__text')}>{text}</span>;
};

export default CardText;
