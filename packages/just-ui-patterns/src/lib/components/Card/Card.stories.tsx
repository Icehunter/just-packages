// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import { Card } from './Card';
import React from 'react';

export default {
  title: 'Patterns/Card',
  component: Card
} as Meta;

const Template: Story = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Children = Template.bind({});
Children.args = {
  children: <span>Span</span>
};
