import React from 'react';

import Icon from '@components/Icon/Icon';

import classNames from '@utils/classNames';

interface FeedbackProps {
  state: 'valid' | 'invalid' | '';
}

const FormsFeedback: React.FC<FeedbackProps> = ({ state = '' }) => {
  const PREFIX = 'feedback';

  return (
    <div className={classNames(`${state}-${PREFIX}`)}>
      <p className="message text--xs">
        <Icon name="error-fill" size="sm" />
        입력해주세요
      </p>
    </div>
  );
};

export default FormsFeedback;
