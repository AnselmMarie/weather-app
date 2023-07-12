import { ReactElement } from 'react';

import {
  UiInput,
  UiButton,
  UiButtonType,
  UiButtonVariant,
  UiAlert,
  UiModal,
} from '@weather-app/design-system';

import useAddressModalLogic from './use-address-form.logic';

const AddressModal = (): ReactElement => {
  const {
    isModalOpen,
    desktopAndUpQuery,
    serverError,
    onHandleSubmit,
    onSubmit,
    onControl,
    onHandleClose,
  } = useAddressModalLogic();

  const Form = ({ hideCancel = false }: any): ReactElement => (
    <>
      <div className="text-center prose-base">
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
        <div className="mb-4">
          <UiInput label="City" name="city" onControl={onControl} />
        </div>
        <div className="mb-4">
          <UiInput label="State" name="state" max={2} onControl={onControl} />
        </div>
        <div className="mb-4">
          <UiInput label="Zip Code" name="zipCode" max={5} onControl={onControl} />
        </div>
        <div className="text-center mb-4">
          <UiButton type={UiButtonType.SUBMIT}>Submit</UiButton>
        </div>
        {!hideCancel ? (
          <div className="text-center mb-4">
            <UiButton variant={UiButtonVariant.OUTLINED} onClick={onHandleClose}>
              Cancel
            </UiButton>
          </div>
        ) : null}
      </form>
    </>
  );

  if (desktopAndUpQuery) {
    return <Form hideCancel />;
  }

  return (
    <UiModal openModal={isModalOpen}>
      <Form />
    </UiModal>
  );
};

export default AddressModal;
