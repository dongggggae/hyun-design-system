import React from 'react';

import classNames from '@utils/classNames';

interface IconProps {
  name: string;
  size?: 'lg' | 'md' | 'sm';
  color?: string;
  className?: string | string[];
}

const Icon: React.FC<IconProps> = ({ name, size = 'md', color = 'white', className }) => {
  const PREFIX = 'icon';

  return (
    <i
      className={classNames(
        PREFIX,
        `${PREFIX}__${name}`,
        `${PREFIX}--${size}`,
        `${PREFIX}--${color}`,
        Array.isArray(className) ? className.join(' ') : className,
      )}
    >
      <b className="blind">{name}</b>
    </i>
  );
};

Icon.displayName = 'Icon';

export default Icon;
