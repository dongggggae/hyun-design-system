import React from 'react';

import Stack from '@components/Stack/Stack';

const Home = () => {
  return (
    <div className="docs">
      <Stack direction="col">
        <select name="" id="" className="form__select" disabled>
          <option value="aaa">aaaa</option>
          <option value="aaa">aaaa</option>
        </select>
        <select name="" id="" className="form__select">
          <option value="aaa">aaaa</option>
          <option value="aaa">aaaa</option>
        </select>
        <select name="" id="" className="form__select is-valid">
          <option value="aaa">aaaa</option>
          <option value="aaa">aaaa</option>
        </select>
        <select name="" id="" className="form__select is-invalid">
          <option value="aaa">aaaa</option>
          <option value="aaa">aaaa</option>
        </select>
      </Stack>
    </div>
  );
};

export default Home;
