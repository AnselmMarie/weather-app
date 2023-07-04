import { ReactElement } from 'react';

import {
  UiInput,
  UiButton,
  UiButtonType,
  UiButtonVariant,
  UiAlert,
  UiBackDrop,
  UiModal,
} from '@weather-app/design-system';

import useAddressModalLogic from './use-address-modal.logic';

const AddressModel = (): ReactElement => {
  const {
    serverError,
    isLoading,
    isModalOpen,
    onHandleSubmit,
    onSubmit,
    onControl,
    onHandleClose,
  } = useAddressModalLogic();

  return (
    <UiModal openModal={isModalOpen}>
      <div className="address-modal--container w-3/4 mx-auto">
        <div className="relative p-5">
          <UiBackDrop openBackdrop={isLoading} />

          <div className="text-center">
            <h1 className="font-bold">Weather Address Form</h1>
            <p>By entering an address you will be able to see a 7 day forecast</p>
          </div>

          {serverError ? (
            <UiAlert alertClasses="mt-3">
              <p>Server Error</p>
              {serverError?.message ? `- ${serverError?.message}` : ''}
              <br />- Make sure the address was added correctly.
            </UiAlert>
          ) : null}

          <form className="mt-9" onSubmit={onHandleSubmit(onSubmit)}>
            <div className="mb-4">
              <UiInput label="Street Address" name="streetAddress" onControl={onControl} />
            </div>
            <div className="mb-4 space-x-4 tw--flex-container">
              <div className="flex-auto">
                <UiInput label="City" name="city" onControl={onControl} />
              </div>
              <div className="flex-auto">
                <UiInput label="State" name="state" max={2} onControl={onControl} />
              </div>
            </div>
            <div className="w-44 mb-4">
              <UiInput label="Zip Code" name="zipCode" max={5} onControl={onControl} />
            </div>
            <div className="text-center space-x-4">
              <UiButton type={UiButtonType.SUBMIT}>Submit</UiButton>
              <UiButton variant={UiButtonVariant.OUTLINED} onClick={onHandleClose}>
                Cancel
              </UiButton>
            </div>
          </form>
        </div>
      </div>
    </UiModal>
  );
};

export default AddressModel;
