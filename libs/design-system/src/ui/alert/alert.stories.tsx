import type { Meta } from '@storybook/react';

import { AlertSeverityEnum } from './alert.enum';

import { UiAlert } from './index';

import '../../styles/global.css';

const Story: Meta<typeof UiAlert> = {
  component: UiAlert,
  title: 'Ui/Alert',
  tags: ['autodocs'],
};
export default Story;

export const Primary = {
  args: {
    severity: AlertSeverityEnum.ERROR,
    className: '',
    children: 'This right here',
  },
};
