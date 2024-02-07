import React from 'react';

const CardText: React.FC<{ text: string }> = ({ text }) => {
  const PREFIX = 'card__text';
  return <span className={PREFIX}>{text}</span>;
};

export default CardText;
