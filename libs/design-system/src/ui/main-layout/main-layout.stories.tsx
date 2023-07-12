import type { Meta } from '@storybook/react';

import { UiMainLayout } from './index';

import '../../styles/global.css';

const Story: Meta<typeof UiMainLayout> = {
  component: UiMainLayout,
  title: 'Ui/Main Layout',
  tags: ['autodocs'],
  argTypes: {
    sideNav: {
      description: 'Displays content for the sidnav area of the layout',
    },
    main: {
      description: 'Displays content for the main area of the layout',
    },
  },
};
export default Story;

export const Primary = {
  args: {
    sideNav: <div>sidenav</div>,
    main: <div>main</div>,
  },
};
