import React from 'react';

import Icon from '@components/Icon/Icon';

import classNames from '@utils/classNames';

interface AddonProps {
  field?: 'clear' | 'search' | 'visible' | 'invisible';
  onClick?: () => void;
}

const FormsAddon: React.FC<AddonProps> = ({ field, onClick }) => {
  const PREFIX = 'input-wrap__addon';

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={classNames(PREFIX)}>
      {field === 'clear' && (
        <button type="button" onClick={onClick}>
          <Icon name="clear-fill" color="gray" />
        </button>
      )}

      {field === 'search' && (
        <button type="button">
          <Icon name="search" color="gray" />
        </button>
      )}

      {field === 'visible' && (
        <button type="button" onClick={onClick}>
          <Icon name="visible" color="gray" />
        </button>
      )}

      {field === 'invisible' && (
        <button type="button" onClick={onClick}>
          <Icon name="invisible" color="gray" />
        </button>
      )}
    </div>
  );
};

export default FormsAddon;
