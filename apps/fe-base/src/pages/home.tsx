import { ReactElement } from 'react';

import { UiAddressForm } from '../features/address-form';
import { UiDailyForecast } from '../features/daily-forecast';
import { UiForecast } from '../features/forecast';

const Home = (): ReactElement => {
  return (
    <>
      <UiAddressForm />
      <UiForecast />
      <UiDailyForecast />
    </>
  );
};

export { Home };
