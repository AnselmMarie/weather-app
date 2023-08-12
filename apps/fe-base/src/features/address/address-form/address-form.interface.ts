import { GenericNonReturnFn } from '@/types';

export interface AddressModalReturn {
  desktopAndUpQuery: string;
  serverError: any;
  isLoading: boolean;
  isModalOpen: boolean;
  onControl: GenericNonReturnFn;
  onHandleSubmit: GenericNonReturnFn;
  onHandleClose: GenericNonReturnFn;
  onSubmit: any;
}
