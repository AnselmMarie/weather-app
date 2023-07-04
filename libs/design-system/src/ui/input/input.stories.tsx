import type { Meta } from '@storybook/react';

import InputControllerView from './input-contolled.view';

import { UiInput, UiInputType } from './index';

import '../../styles/global.css';

const Story: Meta<typeof UiInput> = {
  component: UiInput,
  title: 'Ui/Input',
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Select the type of information the input can store',
      options: UiInputType,
      control: { type: 'select' },
    },
    name: {
      description: 'Name attribute of the input field',
    },
    label: {
      description: 'Label of the input field',
    },
    defaultValue: {
      description: `The initial value of the input field before it's changed by the user`,
    },
    onControl: {
      description: `The initial value of the input field before it's changed by the user`,
    },
    onBlur: {
      action: 'blur',
      description: `The initial value of the input field before it's changed by the user`,
    },
    onChange: {
      action: 'change',
      description: `The initial value of the input field before it's changed by the user`,
    },
  },
};
export default Story;

export const Primary = {
  args: {
    name: 'nonControlledLabel',
    type: UiInputType.TEXT,
    label: 'Non Controlled Label',
  },
};

export const Secondary = {
  render: (args: any) => <InputControllerView {...args} />,
  args: {
    name: 'controlledLabel',
    type: UiInputType.NUMBER,
    label: 'Controlled Label',
    defaultValue: 'The Default Value',
  },
};
