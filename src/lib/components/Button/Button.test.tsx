import { Button } from './Button';
import React from 'react';
import { render } from '__testing__/utils/testing-library';

it('renders correctly', () => {
  const message = 'Learning!!!';

  const { container, getByText } = render(<Button>{message}</Button>);

  expect(getByText(message)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
