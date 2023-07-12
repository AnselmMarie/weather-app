import { PropsWithChildren, ReactElement, ReactNode } from 'react';

import Alert from '@mui/material/Alert';

import { UiAlertSeverity } from './alert.enum';

interface UiAlertProps {
  severity?: UiAlertSeverity;
  alertClasses?: string;
  children: ReactNode;
}

const UiAlert = ({
  severity = UiAlertSeverity.ERROR,
  alertClasses = '',
  children,
}: PropsWithChildren<UiAlertProps>): ReactElement => {
  return (
    <Alert severity={severity} className={alertClasses}>
      {children}
    </Alert>
  );
};

export default UiAlert;
