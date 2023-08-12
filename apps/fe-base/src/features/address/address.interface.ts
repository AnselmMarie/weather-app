import { GenericNonReturnFn } from '@/types';

export interface AddressObj {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface AddressProviderContext {
  address: AddressBaseProps;
  setAddressData: GenericNonReturnFn;
}

export interface AddressBaseProps {
  address: AddressObj | null;
  isModalOpen: boolean;
}
