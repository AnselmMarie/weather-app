import type { Meta } from '@storybook/react';

import { UiModal } from './index';
import '../../styles/global.css';

const Story: Meta<typeof UiModal> = {
  component: UiModal,
  title: 'Ui/Modal',
  tags: ['autodocs'],
  argTypes: {
    openModal: {
      description: 'Prop that will add string classes to the card container',
    },
    children: {
      description: 'The nested content of the card component',
    },
  },
};
export default Story;

export const Primary = {
  args: {
    openModal: true,
    children: <div>hi</div>,
  },
};
