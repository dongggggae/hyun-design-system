'use client';
import React from 'react';

import FormsInput from '@components/Forms/FormsInput';

const Home = () => {
  return (
    <div className="docs">
      <FormsInput id="InputText" type="text" placeholder="password" />
    </div>
  );
};

export default Home;
