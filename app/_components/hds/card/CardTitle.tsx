import className from '@utils/classNames';
import React from 'react';

const CardTitle: React.FC<{ title: string }> = ({ title }) => {
  return <span className={className('card__title')}>{title}</span>;
};
export default CardTitle;
