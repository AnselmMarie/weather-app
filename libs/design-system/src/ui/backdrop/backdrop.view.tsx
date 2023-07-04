import { ReactElement } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

interface UiBackdropProps {
  openBackdrop?: boolean;
}

const BackdropView = ({ openBackdrop = false }: UiBackdropProps): ReactElement => {
  return (
    <Backdrop
      sx={{
        position: 'absolute',
        background: 'rgb(0 0 0 / 60%)',
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={openBackdrop}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropView;
