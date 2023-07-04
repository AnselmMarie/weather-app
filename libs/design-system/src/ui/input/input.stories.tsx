import type { Meta } from '@storybook/react';

import { UiInput, UiInputType } from './index';
import '../../styles/global.css';

const Story: Meta<typeof UiInput> = {
  component: UiInput,
  title: 'Ui/Input',
  tags: ['autodocs'],
};
export default Story;

export const Primary = {
  args: {
    name: '',
    type: UiInputType.TEXT,
    label: 'Test Label',
    defaultValue: 'Default Value',
  },
};

export const Secondary = {
  args: {
    name: '',
    type: UiInputType.TEXT,
    label: 'Test Label',
    defaultValue: 'Default Value',
  },
};
