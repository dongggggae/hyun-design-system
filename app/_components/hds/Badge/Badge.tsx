import React from 'react';

import classNames from '@utils/classNames';

import BadgeText from './Text';

interface BadgeProps {
  text: string;
  size?: 'md' | 'sm';
  state?: 'success' | 'warnning' | 'error' | 'information';
  outline?: boolean;
  className?: string | string[];
}

const Badge: React.FC<BadgeProps> = ({ text, size, state, outline, className }) => {
  const PREFIX = 'badge';

  return (
    <span
      className={classNames(
        PREFIX,
        size && `${PREFIX}--${size}`,
        state && `${PREFIX}--${state}`,
        outline ? `${PREFIX}__outline--${state}` : '',
        Array.isArray(className) ? className.join(' ') : className,
      )}
    >
      <BadgeText text={text} />
    </span>
  );
};

Badge.defaultProps = {
  size: 'sm',
  state: 'success',
  outline: false,
};

Badge.displayName = 'Badge';

export default Badge;
