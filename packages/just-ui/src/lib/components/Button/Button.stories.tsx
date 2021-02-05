import { Button, IButtonProps } from './Button';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';

import React from 'react';

export default {
  title: 'UI/Button',
  component: Button
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ClickHandler = Template.bind({});
ClickHandler.args = {
  onClick: () => {
    window.alert('clicked!');
  }
};

export const Children = Template.bind({});
Children.args = {
  children: <span>Span</span>
};
