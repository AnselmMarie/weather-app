import { ReactElement } from 'react';

import { IAddress } from '../../../services/weather-address';
import {
  UiButtonSize,
  UiButton,
  UiButtonVariant,
} from '@weather-app/design-system';

interface IUiAddressBar {
  address: IAddress | null;
  onEditData: () => void;
}

/**
 * The address bar component displays the current address and other elements
 */
const AddressBar = ({
  address,
  onEditData = () => {},
}: IUiAddressBar): ReactElement => {
  return (
    <>
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
          <UiButton
            variant={UiButtonVariant.TEXT}
            size={UiButtonSize.SMALL}
            onClick={onEditData}
          >
            {address ? 'Edit' : 'Add'} Address
          </UiButton>
        </div>
      </div>
    </>
  );
};

export default AddressBar;
