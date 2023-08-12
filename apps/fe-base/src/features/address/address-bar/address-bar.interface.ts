import { GenericNonReturnFn } from '@/types';

import { AddressObj } from '../address.interface';

export interface AddressBarLogicReturn {
  address: AddressObj;
  desktopAndUpQuery: string;
  onOpenModal: GenericNonReturnFn;
}
