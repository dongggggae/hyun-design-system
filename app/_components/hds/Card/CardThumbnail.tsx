import Image from 'next/image';
import React from 'react';

import classNames from '@utils/classNames';

interface CardThumbnailProps {
  src: string;
  fill?: boolean;
  width?: number;
  height?: number;
  alt: string;
}

const CardThumbnail: React.FC<CardThumbnailProps> = ({ src, fill, width, height, alt }) => {
  return (
    <div className={classNames('card__thumbnail')}>
      <Image src={src} width={width} height={height} alt={alt} fill={fill} />
    </div>
  );
};

export default CardThumbnail;
