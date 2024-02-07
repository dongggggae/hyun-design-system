import React from 'react';

const CardTitle: React.FC<{ title: string }> = ({ title }) => {
  const PREFIX = 'card__title';
  return <span className={PREFIX}>{title}</span>;
};
export default CardTitle;
