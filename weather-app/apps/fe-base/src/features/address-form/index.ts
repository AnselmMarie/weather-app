import { IAddress } from '../../services/weather-address';

import UiAddressForm from './address-form.view';

export { UiAddressForm };

export interface IUiAddress {
    serverError: any;
    validationErrors: any;
    isLoading: boolean;
    address: IAddress | null;
    open: boolean;
    onRegister: any;
    onSubmit: any;
    onHandleSubmit: any;
    onHandleClose: () => void;
    onOpenModal: () => void;
}
