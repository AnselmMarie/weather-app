import { useContext, useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useFormLogic, useMediaQueryLogic } from '@weather-app/design-system';
import { object, string } from 'yup';

import { IAddress, useLazyGetWeatherQuery } from '../../../services';
import { AddressContext } from '../use-address-base.provider';

const schema = object({
  streetAddress: string().required(),
  city: string().required(),
  state: string().max(2).required(),
  zipCode: string().max(5),
});

const useAddressModalLogic = (): any => {
  const { onControl, onHandleSubmit, onReset } = useFormLogic({
    mode: 'all',
    resolver: yupResolver(schema, { stripUnknown: true }),
  });
  const { address, isModalOpen, setAddressData } = useContext<any>(AddressContext);
  const [getWeather, { error, isError, isLoading }] = useLazyGetWeatherQuery();
  const desktopAndUpQuery = useMediaQueryLogic();

  const [serverError, setServerError] = useState<any>(null);

  const handleClose = (): void => {
    setAddressData({ isModalOpen: false });
    setServerError(null);
  };

  const submit = async (payload: IAddress): Promise<void> => {
    const data = structuredClone(payload);

    try {
      await getWeather(data).unwrap();
      setAddressData({ address: data });
      handleClose();
    } catch (err) {
      setServerError({
        message: 'Fetch failed',
      });
    }
  };

  useEffect(() => {
    if (address?.streetAddress) {
      onReset(address);
    } else {
      onReset();
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isError) {
      setServerError(error);
    }
  }, [isError]);

  return {
    desktopAndUpQuery,
    serverError,
    isLoading,
    isModalOpen,
    onControl,
    onHandleSubmit,
    onHandleClose: handleClose,
    onSubmit: submit,
  };
};

export default useAddressModalLogic;
