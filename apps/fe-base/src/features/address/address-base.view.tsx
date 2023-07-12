import { ReactElement } from 'react';

import { UiAddressBar } from './address-bar';
import { UiAddressForm } from './address-form';
import { AddressBaseProvider } from './use-address-base.provider';

const Address = (): ReactElement => {
  return (
    <AddressBaseProvider>
      <UiAddressBar />
      <UiAddressForm />
    </AddressBaseProvider>
  );
};

export default Address;
