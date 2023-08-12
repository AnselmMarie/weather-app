import type { Meta } from '@storybook/react';

import { UiChip } from './index';
import '../../styles/global.css';

const Story: Meta<typeof UiChip> = {
  component: UiChip,
  title: 'Ui/Chip',
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The text inside the component',
    },
    hide: {
      description: 'Determines if the chip needs to be hidden',
    },
  },
};
export default Story;

export const Primary = {
  args: {
    label: 'label',
    hide: false,
  },
};
