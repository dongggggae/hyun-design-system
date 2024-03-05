import React from 'react';

import className from '@utils/classNames';

const CardThumbnail: React.FC<{ imageUrl?: string }> = ({ imageUrl }) => {
  const thumbnailUrl = {
    backgroundImage: `url(${imageUrl})`,
  };

  return <div className={className('card__thumbnail')} style={thumbnailUrl}></div>;
};

export default CardThumbnail;
