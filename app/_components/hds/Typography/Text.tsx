import React from 'react';

import classNames from '@utils/classNames';

interface TextProps {
  children: React.ReactNode;
  tag?: 'span' | 'strong' | 'p';
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
  color?: 'primary' | 'secondary' | 'tertiary' | 'information' | 'positive' | 'caution' | 'negative';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  className?: string | string[];
}

const Text: React.FC<TextProps> = ({ children, tag = 'p', size = 'md', color = 'secondary', weight, className }) => {
  const textTag = tag || 'p';
  const PREFIX = 'text';

  return React.createElement(
    textTag,
    {
      className: classNames(
        PREFIX,
        size && `text--${size}`,
        color && `fc--${color}`,
        weight && `text--${size}-${weight}`,
        Array.isArray(className) ? className.join(' ') : className,
      ),
    },
    children,
  );
};

Text.displayName = 'Text';

export default Text;
