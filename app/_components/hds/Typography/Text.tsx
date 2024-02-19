import React from 'react';
import classNames from '@utils/classNames';

interface TextProps {
  children: React.ReactNode;
  tag?: 'span' | 'strong' | 'p';
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
  color?: 'primary' | 'secondary' | 'tertiary' | 'information' | 'positive' | 'caution' | 'negative';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
}

const Text: React.FC<TextProps> = ({ children, tag, size, color, weight }) => {
  const textTag = tag || 'p';

  return React.createElement(
    textTag,
    {
      className: classNames(
        'text',
        size && `text--${size}`,
        color && `fc--${color}`,
        weight && `text--${size}-${weight}`,
      ),
    },
    children,
  );
};

Text.defaultProps = {
  tag: 'p',
  size: 'md',
  color: 'secondary',
};

Text.displayName = 'Text';

export default Text;
