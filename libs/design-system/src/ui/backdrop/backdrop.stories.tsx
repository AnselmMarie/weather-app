import type { Meta } from '@storybook/react';

import { UiBackDrop } from './index';

import '../../styles/global.css';

const Story: Meta<typeof UiBackDrop> = {
  component: UiBackDrop,
  title: 'Ui/Backdrop',
  tags: ['autodocs'],
};
export default Story;

export const Primary = {
  args: {
    openBackdrop: true,
  },
};
