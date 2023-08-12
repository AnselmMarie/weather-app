import { ReactElement } from 'react';

import { Chip } from '@mui/material';
import { UiButtonSize, UiButton, UiButtonVariant } from '@weather-app/design-system';

import useAddressBarLogic from './use-address-bar.logic';

const AddressBar = (): ReactElement => {
  const { address, desktopAndUpQuery, onOpenModal } = useAddressBarLogic();
  const streetAddress = `${address?.streetAddress}${address?.city ? ', ' : ''}${address?.city}${
    address?.state ? ', ' : ''
  }${address?.state}${address?.zipCode ? ', ' : ''}${address?.zipCode}`;

  return (
    <div className="tw--flex-container tw--flex-center max-w-lg mb-4 mx-auto">
      {address?.streetAddress ? (
        <Chip
          sx={{
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
              textAlign: 'center',
            },
          }}
          label={streetAddress}
        />
      ) : null}
      {!desktopAndUpQuery ? (
        <div>
          <UiButton variant={UiButtonVariant.TEXT} size={UiButtonSize.SMALL} onClick={onOpenModal}>
            {address ? 'Edit' : 'Add'} Address
          </UiButton>
        </div>
      ) : null}
    </div>
  );
};

export default AddressBar;
