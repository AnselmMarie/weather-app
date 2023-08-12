import { PropsWithChildren, ReactElement, createContext, useReducer } from 'react';

import { AddressBaseProps } from './address.interface';

const AddressContext = createContext({});

const AddressBaseProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [addressData, setAddressData] = useReducer(
    (current: Partial<AddressBaseProps>, update: Partial<AddressBaseProps>) => ({
      ...current,
      ...update,
    }),
    {
      isModalOpen: false,
      address: null,
    }
  );

  return (
    <AddressContext.Provider value={{ ...addressData, setAddressData }}>
      {children}
    </AddressContext.Provider>
  );
};

export { AddressBaseProvider, AddressContext };
