import type { Meta } from '@storybook/react';

import { UiAlertSeverity } from './alert.enum';

import { UiAlert } from './index';

import '../../styles/global.css';

const Story: Meta<typeof UiAlert> = {
  component: UiAlert,
  title: 'Ui/Alert',
  tags: ['autodocs'],
  argTypes: {
    severity: {
      description: 'Attribute that is used for testing purposes',
      options: UiAlertSeverity,
      control: { type: 'select' },
    },
    children: {
      description: 'The nested content of the card component',
    },
  },
};
export default Story;

export const Primary = {
  args: {
    severity: UiAlertSeverity.ERROR,
    children: 'This right here',
  },
};
