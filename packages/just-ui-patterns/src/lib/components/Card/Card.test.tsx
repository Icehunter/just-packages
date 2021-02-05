import { Card } from './Card';
import React from 'react';
import { render } from '__testing__/utils/testing-library';

it('renders correctly', () => {
  const message = 'Learning!!!';

  const { container, getByText } = render(<Card>{message}</Card>);

  expect(getByText(message)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
