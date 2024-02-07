import React from 'react';

const CardThumbnail: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const PREFIX = 'card__thumbnail';
  const thumbnailUrl = {
    backgroundImage: `url(${imageUrl})`,
  };

  return <div className={PREFIX} style={thumbnailUrl}></div>;
};

export default CardThumbnail;
