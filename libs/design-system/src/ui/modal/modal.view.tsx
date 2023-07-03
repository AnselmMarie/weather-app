import { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { Modal } from '@mui/material';

interface UiModalProps {
  openModal?: boolean;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  children: ReactNode;
}

const AlertView = ({
  openModal = false,
  ariaLabelledby = '',
  ariaDescribedby = '',
  children,
}: PropsWithChildren<UiModalProps>): ReactElement => {
  return (
    <Modal
      open={openModal}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
    >
      <>{children}</>
    </Modal>
  );
};

export default AlertView;
