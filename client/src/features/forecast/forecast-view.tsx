import React, { ReactElement } from 'react';

import { UiCard } from '../../components/card';
import { IForecastPeriods } from '../../services/weather-address';
import useWeatherForecastLogic from './use-forecast-logic';

/**
 * The forecast feature displays the 7-day forecast
 */
const Forecast = (): ReactElement => {
    const { data, weatherData, activeDay, onChangeActiveDay } =
        useWeatherForecastLogic();

    return (
        <>
            <div className="tw--flex-container tw--flex-center space-x-4 mx-auto min-w-1024">
                {!data && !activeDay
                    ? 'To see a 7-day forecast of an area, click on the "Add Address" button, then submit an address..'
                    : null}
                {weatherData?.map(
                    (el: IForecastPeriods, i: number): ReactElement => {
                        const isActive =
                            !!(i === 0 && activeDay === 'today') ||
                            activeDay === el.name.toLowerCase();

                        return (
                            <React.Fragment key={i}>
                                <UiCard
                                    classes="w-28 h-48 cursor-pointer text-center"
                                    raised={isActive}
                                    onClick={() =>
                                        onChangeActiveDay(
                                            i === 0 ? 'today' : el.name
                                        )
                                    }
                                >
                                    <img
                                        className="rounded-full mt-2 mb-2 mx-auto"
                                        src={el.icon}
                                    />
                                    <b>{el.name}</b>
                                    <br />
                                    {el.temperature}˚{el.temperatureUnit}
                                </UiCard>
                            </React.Fragment>
                        );
                    }
                )}
            </div>
        </>
    );
};

export default Forecast;
