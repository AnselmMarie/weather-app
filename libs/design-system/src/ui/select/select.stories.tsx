import type { Meta } from '@storybook/react';

import { UiSelect } from './index';
import '../../styles/global.css';

const Story: Meta<typeof UiSelect> = {
  component: UiSelect,
  title: 'Ui/Select',
  tags: ['autodocs'],
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
    labelId: 'testSelectLabel',
    id: 'testSelectId',
    label: 'Test',
    defaultValue: 2,
    // onChange,
  },
};
