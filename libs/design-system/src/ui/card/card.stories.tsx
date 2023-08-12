import type { Meta } from '@storybook/react';

import { UiCard } from './index';
import '../../styles/global.css';

const Story: Meta<typeof UiCard> = {
  component: UiCard,
  title: 'Ui/Card',
  tags: ['autodocs'],
  argTypes: {
    cardClasses: {
      description: 'Prop that will add string classes to the card container',
    },
    raised: {
      description: `Change the depth of the card's shadow`,
    },
    children: {
      description: 'The nested content of the card component',
    },
    onClick: {
      description: 'After a click event this function will be called',
      action: 'clicked',
    },
  },
};
export default Story;

export const Primary = {
  args: {
    raised: false,
    children: <div>children</div>,
  },
};
