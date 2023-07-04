import type { Meta } from '@storybook/react';

import { UiButton, UiButtonSize, UiButtonType, UiButtonVariant } from './index';
import '../../styles/global.css';

const Story: Meta<typeof UiButton> = {
  component: UiButton,
  title: 'Ui/Button',
  tags: ['autodocs'],
  argTypes: {
    testid: {
      description: 'Attribute that is used for testing purposes',
    },
    variant: {
      description: 'Select different variant types of a button',
      options: UiButtonVariant,
      control: { type: 'select' },
    },
    size: {
      description: `Change the depth of the card's shadow`,
      options: UiButtonSize,
      control: { type: 'select' },
    },
    type: {
      description: `The nested content of the card component`,
      options: UiButtonType,
      control: { type: 'select' },
    },
    children: {
      description: `The nested content of the card component`,
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
    testid: 'testing-label',
    size: UiButtonSize.LARGE,
    variant: UiButtonVariant.CONTAINED,
    type: UiButtonType.BUTTON,
    children: 'Test',
  },
};
