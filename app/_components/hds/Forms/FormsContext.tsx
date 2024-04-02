'use client';

import { ChangeEvent, useState } from 'react';

// Text-field
export default function useInput() {
  const [inputText, setInputText] = useState<string>('');

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  return {
    inputText,
    onChange,
  };
}

//
