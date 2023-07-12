import { IAddress } from '../../services/weather-address';

import UiAddress from './address-base.view';

export { UiAddress };

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
