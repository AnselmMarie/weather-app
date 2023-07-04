import { PropsWithChildren, ReactElement, ReactNode } from 'react';

import Alert from '@mui/material/Alert';

import { AlertSeverityEnum } from './alert.enum';

interface UiAlertProps {
  severity?: AlertSeverityEnum;
  className?: string;
  children: ReactNode;
}

const AlertView = ({
  severity = AlertSeverityEnum.ERROR,
  className = '',
  children,
}: PropsWithChildren<UiAlertProps>): ReactElement => {
  return (
    <Alert severity={severity} className={className}>
      {children}
    </Alert>
  );
};

export default AlertView;
