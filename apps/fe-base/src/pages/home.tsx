import { ReactElement } from 'react';

import { UiMainLayout } from '@weather-app/design-system';

import { UiAddress } from '../features/address';
import { UiDailyForecast } from '../features/daily-forecast';
import { UiForecast } from '../features/forecast';

const Home = (): ReactElement => {
  return (
    <UiMainLayout
      sideNav={<UiAddress />}
      main={
        <>
          <UiForecast />
          <UiDailyForecast />
        </>
      }
    />
  );
};

export { Home };
