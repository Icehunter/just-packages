import '@testing-library/jest-dom';

import React, { FC, ReactElement } from 'react';
import { RenderOptions, RenderResult, render } from '@testing-library/react';

export const WrappedApplication: FC = (props) => {
  const { children } = props;

  // imagine you had some state providers that were needed in testing
  // you could bootstrap those here and prewrap the application
  return <>{children}</>;
};

const customRender = (ui: ReactElement, options: Omit<RenderOptions, 'queries'> = {}): RenderResult =>
  render(ui, { wrapper: WrappedApplication, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
