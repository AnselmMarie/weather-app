import type { Meta } from '@storybook/react';

import { UiModal } from './index';
import '../../styles/global.css';

const Story: Meta<typeof UiModal> = {
  component: UiModal,
  title: 'Ui/Modal',
  tags: ['autodocs'],
};
export default Story;

export const Primary = {
  args: {
    openModal: true,
    ariaLabelledby: '',
    ariaDescribedby: '',
    children: <div>hi</div>,
  },
};
