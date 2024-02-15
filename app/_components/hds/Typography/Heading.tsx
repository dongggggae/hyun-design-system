import React from 'react';
import classNames from '@utils/classNames';

interface HeadingProps {
  text: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: 'primary' | 'secondary' | 'tertiary' | 'information' | 'positive' | 'caution' | 'negative';
}

const Heading: React.FC<HeadingProps> = ({ text, level, size = 1, color }) => {
  const headingTag = level || 'h1';

  return React.createElement(headingTag, { className: classNames(size && `h${size}`, color && `fc--${color}`) }, text);
};

Heading.defaultProps = {
  level: 'h1',
  size: 1,
};

Heading.displayName = 'Heading';

export default Heading;
