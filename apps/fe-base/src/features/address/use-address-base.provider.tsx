import { ReactElement, createContext, useReducer } from 'react';

const AddressContext = createContext({});

const AddressBaseProvider = ({ children }: any): ReactElement => {
  const [addressData, setAddressData] = useReducer(
    (current: any, update: any) => ({ ...current, ...update }),
    {
      isModalOpen: false,
      address: {},
    }
  );

  return (
    <AddressContext.Provider value={{ ...addressData, setAddressData }}>
      {children}
    </AddressContext.Provider>
  );
};

export { AddressBaseProvider, AddressContext };
