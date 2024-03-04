import React from 'react';
import classNames from '@utils/classNames';

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classNames('modal__footer')}>{children}</div>;
};

export default Footer;
