import { RenderOptions, RenderResult, render } from '@testing-library/react';

import React from 'react';

export const WrappedApplication: React.FC = (props) => {
  const { children } = props;

  // imagine you had some state providers that were needed in testing
  // you could bootstrap those here and prewrap the application
  return <React.Fragment>{children}</React.Fragment>;
};

const customRender = (ui: React.ReactElement, options: Omit<RenderOptions, 'queries'> = {}): RenderResult =>
  render(ui, { wrapper: WrappedApplication, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
