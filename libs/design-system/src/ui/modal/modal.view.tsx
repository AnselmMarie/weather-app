import { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { Modal } from '@mui/material';

import './modal.css';

interface UiModalProps {
  openModal?: boolean;
  styleBaseContainer?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  children: ReactNode;
}

const ModalView = ({
  openModal = false,
  styleBaseContainer = '',
  ariaLabelledby = '',
  ariaDescribedby = '',
  children,
}: PropsWithChildren<UiModalProps>): ReactElement => {
  return (
    <Modal open={openModal} aria-labelledby={ariaLabelledby} aria-describedby={ariaDescribedby}>
      <div className={`base-modal--container w-3/4 mx-auto ${styleBaseContainer}`}>{children}</div>
    </Modal>
  );
};

export default ModalView;
