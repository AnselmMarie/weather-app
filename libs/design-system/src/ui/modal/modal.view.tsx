import { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { Modal } from '@mui/material';

import './modal.css';

interface UiModalProps {
  openModal?: boolean;
  styleBaseContainer?: string;
  children: ReactNode;
}

const UiModal = ({
  openModal = false,
  styleBaseContainer = '',
  children,
}: PropsWithChildren<UiModalProps>): ReactElement => {
  return (
    <Modal open={openModal}>
      <div className={`base-modal--container w-3/4 mx-auto ${styleBaseContainer}`}>{children}</div>
    </Modal>
  );
};

export default UiModal;
