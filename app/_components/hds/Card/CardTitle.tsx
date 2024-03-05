import React from 'react';

import className from '@utils/classNames';

const CardTitle: React.FC<{ title: string }> = ({ title }) => {
  return <span className={className('card__title')}>{title}</span>;
};
export default CardTitle;
