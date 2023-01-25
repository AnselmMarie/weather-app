import React, { ReactElement } from 'react';
import { Backdrop, CircularProgress, Modal } from '@mui/material';
import Alert from '@mui/material/Alert';

import {
    UiButton,
    UiButtonType,
    UiButtonVariant,
} from '../../../components/button';
import { UiInput } from '../../../components/input';
import { IUiAddress } from '..';

/**
 * The address model component allows the user enter an address
 */
const AddressModel = ({
    open = false,
    isLoading = false,
    serverError,
    validationErrors,
    onRegister,
    onHandleSubmit,
    onHandleClose,
    onSubmit,
}: Partial<IUiAddress>): ReactElement => {
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="address-modal--container w-3/4 mx-auto">
                <div className="relative p-5">
                    <Backdrop
                        sx={{
                            position: 'absolute',
                            background: 'rgb(0 0 0 / 60%)',
                            color: '#fff',
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={isLoading}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>

                    <div className="text-center">
                        <h1 className="font-bold">Weather Address Form</h1>
                        <p>
                            By entering an address you will be able to see a 7
                            day forecast
                        </p>
                    </div>

                    {serverError ? (
                        <Alert severity="error" className="mt-3">
                            <p>Server Error</p>- {serverError?.message}
                            <br />- Make sure the address was added correctly.
                        </Alert>
                    ) : null}

                    {validationErrors ? (
                        <Alert severity="error" className="mt-3">
                            <p>Validation Errors</p>
                            {validationErrors?.map(
                                (el: any, i: number): ReactElement => {
                                    return <div key={i}>{el.message}</div>;
                                }
                            )}
                        </Alert>
                    ) : null}

                    <form className="mt-9" onSubmit={onHandleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <UiInput
                                label="Street Address"
                                name="streetAddress"
                                onRegister={onRegister}
                            />
                        </div>
                        <div className="mb-4 space-x-4 tw--flex-container">
                            <div className="flex-auto">
                                <UiInput
                                    label="City"
                                    name="city"
                                    onRegister={onRegister}
                                />
                            </div>
                            <div className="flex-auto">
                                <UiInput
                                    label="State"
                                    name="state"
                                    max={2}
                                    onRegister={onRegister}
                                />
                            </div>
                        </div>
                        <div className="w-44 mb-4">
                            <UiInput
                                label="Zip Code"
                                name="zipCode"
                                max={5}
                                onRegister={onRegister}
                            />
                        </div>
                        <div className="text-center space-x-4">
                            <UiButton type={UiButtonType.SUBMIT}>
                                Submit
                            </UiButton>
                            <UiButton
                                variant={UiButtonVariant.OUTLINED}
                                onClick={onHandleClose}
                            >
                                Cancel
                            </UiButton>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default AddressModel;
