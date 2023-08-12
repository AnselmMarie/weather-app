import { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { Card } from '@mui/material';

interface UiCardProps {
  cardClasses?: string;
  raised?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const UiCard = ({
  cardClasses = '',
  raised = false,
  children,
  onClick = () => {},
}: PropsWithChildren<UiCardProps>): ReactElement => {
  return (
    <Card raised={raised} className={cardClasses} onClick={onClick}>
      {children}
    </Card>
  );
};

export default UiCard;
