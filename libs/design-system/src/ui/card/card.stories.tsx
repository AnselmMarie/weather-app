import type { Meta } from '@storybook/react';

import { UiCard } from './index';
import '../../styles/global.css';

const Story: Meta<typeof UiCard> = {
  component: UiCard,
  title: 'Ui/Card',
  tags: ['autodocs'],
};
export default Story;

export const Primary = {
  args: {
    classes: '',
    raised: false,
    children: <div>children</div>,
    // onClick: () => {},
  },
};
