import React from 'react';

import className from '@utils/classNames';

const CardText: React.FC<{ text: string }> = ({ text }) => {
  return <span className={className('card__text')}>{text}</span>;
};

export default CardText;
