import React from 'react';

import Heading from '@components/Typography/Heading';

interface ModalTitleProps {
  text: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: React.FC<ModalTitleProps> = ({ text, size }) => {
  return <Heading level="h4" size={size} text={text} />;
};

Title.defaultProps = {
  size: 4,
};

export default Title;
