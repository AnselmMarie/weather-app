import { ReactElement } from 'react';

import { UiButtonSize, UiButton, UiButtonVariant } from '@weather-app/design-system';

import useAddressBarLogic from './use-address-bar.logic';

const AddressBar = (): ReactElement => {
  const { address, onOpenModal } = useAddressBarLogic();

  return (
    <div className="tw--flex-container m-5 tw--flex-center max-w-lg mx-auto">
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
      <div>
        <UiButton variant={UiButtonVariant.TEXT} size={UiButtonSize.SMALL} onClick={onOpenModal}>
          {address ? 'Edit' : 'Add'} Address
        </UiButton>
      </div>
    </div>
  );
};

export default AddressBar;
