import { IAddress } from '../../services/weather-address';

import UiAddressForm from './address-base.view';

export { UiAddressForm };

export interface IUiAddress {
  serverError: any;
  formErrors: any;
  isLoading: boolean;
  address: IAddress | null;
  open: boolean;
  onControl?: any;
  onSubmit: any;
  onHandleSubmit: any;
  onHandleClose: () => void;
  onOpenModal: () => void;
}
