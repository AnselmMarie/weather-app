import { useContext, useEffect } from 'react';

import { useMediaQueryLogic } from '@weather-app/design-system';

import { AddressContext } from '../use-address-base.provider';

import { AddressBarLogicReturn } from './address-bar.interface';

const useAddressBarLogic = (): AddressBarLogicReturn => {
  const { address, setAddressData } = useContext<any>(AddressContext);
  const desktopAndUpQuery = useMediaQueryLogic();

  const openModal = (): void => {
    setAddressData({ isModalOpen: true });
  };

  useEffect(() => {
    openModal();
  }, []);

  return {
    address,
    desktopAndUpQuery,
    onOpenModal: openModal,
  };
};

export default useAddressBarLogic;
