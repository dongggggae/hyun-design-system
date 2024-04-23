import React from 'react';

import classNames from '@utils/classNames';

interface StackProps {
  children: React.ReactNode;
  direction?: 'row' | 'col';
  gap?: number;
  className?: string | string[];
}

const Stack: React.FC<StackProps> = ({ children, direction = 'row', gap = 2, className }) => {
  const PREFIX = 'stack';

  return (
    <div
      className={classNames(
        direction && direction == 'row' ? `h-${PREFIX}` : `v-${PREFIX}`,
        gap ? `gap-${gap}` : '',
        Array.isArray(className) ? className.join(' ') : className,
      )}
    >
      {children}
    </div>
  );
};

Stack.displayName = 'Stack';

export default Stack;
