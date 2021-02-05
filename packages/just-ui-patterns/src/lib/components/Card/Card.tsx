import React, { FC } from 'react';

import { Button } from '@icehunter/just-ui';

export const Card: FC = (props) => {
  const { children } = props;

  return (
    <div>
      <Button>{children}</Button>
    </div>
  );
};
