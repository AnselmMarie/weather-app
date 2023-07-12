import { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { Card } from '@mui/material';

interface IUiCard {
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
}: PropsWithChildren<IUiCard>): ReactElement => {
  return (
    <Card raised={raised} className={cardClasses} onClick={onClick}>
      {children}
    </Card>
  );
};

export default UiCard;
