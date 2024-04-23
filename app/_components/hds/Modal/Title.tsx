import React from 'react';

import Heading from '@components/Typography/Heading';

interface ModalTitleProps {
  text: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: React.FC<ModalTitleProps> = ({ text, size = 4 }) => {
  return <Heading level="h4" size={size} text={text} />;
};

export default Title;
