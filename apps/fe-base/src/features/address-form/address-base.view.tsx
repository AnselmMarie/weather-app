import { ReactElement } from 'react';

import { UiAddressBar } from './address-bar';
import { UiAddressModel } from './address-modal';
import { AddressBaseProvider } from './use-address-base.provider';
import './address-base.css';

const AddressForm = (): ReactElement => {
  return (
    <AddressBaseProvider>
      <UiAddressBar />
      <UiAddressModel />
    </AddressBaseProvider>
  );
};

export default AddressForm;
