import { useContext, useEffect } from 'react';

import { AddressContext } from '../use-address-base.provider';

const useAddressBarLogic = (): any => {
  const { address, setAddressData } = useContext<any>(AddressContext);

  const openModal = (): void => {
    setAddressData({ isModalOpen: true });
  };

  useEffect(() => {
    openModal();
  }, []);

  return {
    address,
    onOpenModal: openModal,
  };
};

export default useAddressBarLogic;
