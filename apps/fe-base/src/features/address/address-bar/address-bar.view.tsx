import { ReactElement } from 'react';

import { UiButtonSize, UiButton, UiButtonVariant } from '@weather-app/design-system';

import useAddressBarLogic from './use-address-bar.logic';

const AddressBar = (): ReactElement => {
  const { address, desktopAndUpQuery, onOpenModal } = useAddressBarLogic();

  return (
    <div className="tw--flex-container tw--flex-center max-w-lg mx-auto">
      <div>
        <i className="fa-solid fa-location-dot"></i>
        <div className="mx-2">
          {address?.streetAddress}
          {address?.city ? ', ' : null}
          {address?.city}
          {address?.state ? ', ' : null}
          {address?.state}
          {address?.zipCode ? ', ' : null}
          {address?.zipCode}
        </div>
        {!desktopAndUpQuery ? (
          <div>
            <UiButton
              variant={UiButtonVariant.TEXT}
              size={UiButtonSize.SMALL}
              onClick={onOpenModal}
            >
              {address ? 'Edit' : 'Add'} Address
            </UiButton>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AddressBar;
