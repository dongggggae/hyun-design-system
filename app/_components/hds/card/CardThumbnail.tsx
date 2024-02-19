import className from '@utils/classNames';
import React from 'react';

const CardThumbnail: React.FC<{ imageUrl?: string }> = ({ imageUrl }) => {
  const thumbnailUrl = {
    backgroundImage: `url(${imageUrl})`,
  };

  return <div className={className('card__thumbnail')} style={thumbnailUrl}></div>;
};

export default CardThumbnail;
