import type { Meta } from '@storybook/react';

import { UiSelect } from './index';
import '../../styles/global.css';

const Story: Meta<typeof UiSelect> = {
  component: UiSelect,
  title: 'Ui/Select',
  tags: ['autodocs'],
  argTypes: {
    menuItems: {
      description:
        'An array that populates the select field with a label and value for each option',
    },
    label: {
      description: 'Label of the select field',
    },
    defaultValue: {
      description: `The initial value of the select field before it's changed by the user`,
    },
    onChange: {
      description: 'After a change event this function will be called',
      action: 'change',
    },
  },
};
export default Story;

export const Primary = {
  args: {
    menuItems: [
      {
        label: 1,
        value: 1,
      },
      {
        label: 2,
        value: 2,
      },
      {
        label: 3,
        value: 3,
      },
      {
        label: 4,
        value: 4,
      },
    ],
    label: 'Select Field',
    defaultValue: 2,
  },
};
