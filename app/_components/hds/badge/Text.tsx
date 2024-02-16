import React from 'react';

interface BadgeTextProps {
  text: string;
}

const BadgeText: React.FC<BadgeTextProps> = ({ text }) => {
  const PREFIX = 'badge__text';

  return <span className={PREFIX}>{text}</span>;
};

export default BadgeText;
