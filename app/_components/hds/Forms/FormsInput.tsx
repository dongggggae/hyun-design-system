import React from 'react';

import classNames from '@utils/classNames';

import FormsFeedback from './FormsFeedback';
import FormsLabel from './FormsLabel';
import Input from './Input';

interface FormsInputProps {
  id: string;
  label: string;
  feedback?: string;
  feedbackValidation?: 'valid' | 'invalid' | '';
}

const FormsInput: React.FC<FormsInputProps> = ({ id, label, feedback, feedbackValidation, ...props }) => {
  return (
    <div className="forms-wrap">
      {label && <FormsLabel htmlFor={id}>{label}</FormsLabel>}
      <Input id={id} {...props} />
      {feedback && <FormsFeedback state={feedbackValidation}>{feedback}</FormsFeedback>}
    </div>
  );
};

FormsInput.displayName = 'FormsInput';

export default FormsInput;
