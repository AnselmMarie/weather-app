import { ReactElement } from 'react';

import { Chip } from '@mui/material';

interface UiChipProps {
  label: string;
  hide?: boolean;
}

const UiChip = ({ label = '', hide = false }: UiChipProps): ReactElement | null => {
  if (hide) {
    return null;
  }

  return (
    <Chip
      sx={{
        height: 'auto',
        '& .MuiChip-label': {
          display: 'block',
          whiteSpace: 'normal',
          textAlign: 'center',
        },
      }}
      label={label}
    />
  );
};

export default UiChip;
