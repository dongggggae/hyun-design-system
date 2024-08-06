import React from 'react';

import classNames from '@utils/classNames';

import FormsFeedback from './FormsFeedback';
import FormsLabel from './FormsLabel';
import Input from './Input';

interface FormsInputProps {
  id: string;
  label: string;
  state?: '' | 'valid' | 'invalid';
  feedback?: string;
  feedbackValidation?: '' | 'valid' | 'invalid';
}

const FormsInput: React.FC<FormsInputProps> = ({ id, label, state = '', feedback, ...props }) => {
  return (
    <div className="forms-wrap">
      {label && <FormsLabel htmlFor={id}>{label}</FormsLabel>}
      <Input id={id} {...props} state={state} />
      {feedback && <FormsFeedback state={state}>{feedback}</FormsFeedback>}
    </div>
  );
};

FormsInput.displayName = 'FormsInput';

export default FormsInput;
