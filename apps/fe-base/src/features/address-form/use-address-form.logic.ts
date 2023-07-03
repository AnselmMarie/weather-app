import { useEffect, useState } from 'react';
import { object, string } from 'yup';

import { IAddress, useLazyGetWeatherQuery } from '../../services';
import { yupResolver } from '@hookform/resolvers/yup';

import { IUiAddress } from '.';
import './address-form.css';
import { useFormLogic } from '@weather-app/design-system';

const schema = object({
  streetAddress: string().required(),
  city: string().required(),
  state: string().max(2).required(),
  zipCode: string().max(5),
});

const useAddressFormLogic = (): IUiAddress => {
  const { formErrors, onControl, onHandleSubmit, onReset } = useFormLogic({
    mode: 'all',
    resolver: yupResolver(schema, { stripUnknown: true }),
  });

  const [getWeather, result] = useLazyGetWeatherQuery();
  const { data, error, isError, isSuccess, isLoading } = result;

  const [address, setAddress] = useState<IAddress | null>(null);
  const [payloadObj, setPayloadObj] = useState<IAddress | null>(null);
  const [open, setOpen] = useState(false);
  const [serverError, setServerError] = useState<any>(null);

  const submit = (payload: IAddress): void => {
    fetchForecast(payload);
  };

  const openModal = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    if (payloadObj !== null) {
      onReset(payloadObj);
    } else {
      onReset();
    }
    setOpen(false);
    setPayloadObj(null);
    setServerError(null);
  };

  const fetchForecast = async (payload: IAddress) => {
    setPayloadObj(payload);

    try {
      await getWeather(payload).unwrap();
    } catch (err) {
      setServerError({
        message: 'Fetch failed',
      });
    }
  };

  useEffect(() => {
    if (isError) {
      setServerError(error);
    }
  }, [isError]);

  useEffect(() => {
    if (!data) {
      openModal();
    }

    if (isSuccess && !isError) {
      setAddress(payloadObj);
      handleClose();
    }
  }, [data]);

  return {
    formErrors,
    serverError,
    isLoading,
    address,
    open,
    onControl,
    onOpenModal: openModal,
    onHandleSubmit,
    onHandleClose: handleClose,
    onSubmit: submit,
  };
};

export default useAddressFormLogic;
