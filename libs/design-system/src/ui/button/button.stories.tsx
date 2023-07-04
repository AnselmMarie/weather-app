import type { Meta } from '@storybook/react';

import { UiButton, UiButtonSize, UiButtonType, UiButtonVariant } from './index';
import '../../styles/global.css';

const Story: Meta<typeof UiButton> = {
  component: UiButton,
  title: 'Ui/Button',
  tags: ['autodocs'],
};
export default Story;

export const Primary = {
  args: {
    testid: '',
    variant: UiButtonVariant.CONTAINED,
    size: UiButtonSize.LARGE,
    type: UiButtonType.BUTTON,
    children: 'Test',
    // onClick = () => {},
  },
};
