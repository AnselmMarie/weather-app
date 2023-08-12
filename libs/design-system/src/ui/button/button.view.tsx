import { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { Button } from '@mui/material';

import { UiButtonSize, UiButtonVariant, UiButtonType } from '.';

interface UiButtonProps {
  testid?: string;
  variant?: UiButtonVariant;
  size?: UiButtonSize;
  type?: UiButtonType;
  children: ReactNode;
  onClick?: () => void;
}

/**
 * The button component uses the material ui button and
 * restricts the props the developer is allowed to use
 */
const UiButton = ({
  testid = '',
  variant = UiButtonVariant.CONTAINED,
  size = UiButtonSize.LARGE,
  type = UiButtonType.BUTTON,
  children,
  onClick = () => {},
}: PropsWithChildren<UiButtonProps>): ReactElement => {
  return (
    <Button data-testid={testid} type={type} size={size} variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default UiButton;
