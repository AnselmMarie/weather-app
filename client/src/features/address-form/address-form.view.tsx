import React, { ReactElement } from 'react';

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
        validationErrors,
        isLoading,
        address,
        open,
        onRegister,
        onHandleSubmit,
        onSubmit,
        onOpenModal,
        onHandleClose,
    } = useAddressFormLogic();

    return (
        <>
            <div>
                <div>
                    <UiAddressBar address={address} onEditData={onOpenModal} />
                    <UiAddressModel
                        serverError={serverError}
                        validationErrors={validationErrors}
                        isLoading={isLoading}
                        open={open}
                        onRegister={onRegister}
                        onHandleSubmit={onHandleSubmit}
                        onHandleClose={onHandleClose}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </>
    );
};

export default AddressForm;
