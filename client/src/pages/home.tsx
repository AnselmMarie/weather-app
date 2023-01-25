import React, { ReactElement } from 'react';

import { UiAddressForm } from '../features/address-form';
import { UiForecast } from '../features/forecast';
import { UiDailyForecast } from '../features/daily-forecast';

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
