// Button.stories.ts|tsx

import React from 'react';

import { Story, Meta } from '@storybook/react';

import Button  from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes:{
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"]
      },
    },
    onClick: {
      action: "clicked"
    },
    variant : {
      control: {
        type: "radio",
        options: ["text", "outlined","outlined"]
      }
    },
    color: {
      control: {
        type: "radio",
        options: ["inherit" , "success" , "error" , "warning" , "primary" , "secondary" , "info"]
      }
    }
  }
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = { backgroundColor: "primary400.main", size: "small", label:"button", color:"success"};

export const Secondary = Template.bind({});
Secondary.args = {backgroundColor: "primary500.main",size: "medium", label:"button", color:"success"};