import { ReactElement } from 'react';

import useAddressFormLogic from './use-address-form.logic';
import { UiAddressBar } from './address-bar';
import { UiAddressModel } from './address-model';
import './address-form.css';

/**
 * The address form feature allows the user to add/edit an address so it can get the 7-day forecast
 */
const AddressForm = (): ReactElement => {
  const {
    serverError,
    formErrors,
    isLoading,
    address,
    open,
    onHandleSubmit,
    onSubmit,
    onControl,
    onOpenModal,
    onHandleClose,
  } = useAddressFormLogic();

  return (
    <>
      <UiAddressBar address={address} onEditData={onOpenModal} />
      <UiAddressModel
        serverError={serverError}
        formErrors={formErrors}
        isLoading={isLoading}
        open={open}
        onControl={onControl}
        onHandleSubmit={onHandleSubmit}
        onHandleClose={onHandleClose}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default AddressForm;
