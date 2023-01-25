import React, { ReactElement } from 'react';

import { IForecastPeriods } from '../../services/weather-address';
import useDailyForecastLogic from './use-daily-forecast-logic';

/**
 * The daily forecast feature displays the additional information for the selected forecast
 */
const DailyForecast = (): ReactElement => {
    const { activeData } = useDailyForecastLogic();

    return (
        <>
            {activeData.length > 0 ? (
                <div className="daily-forecast__wrapper mt-7 text-center">
                    <h1 className="font-bold">Daily Forecast</h1>
                    {activeData.map(
                        (el: IForecastPeriods, i: number): ReactElement => {
                            return (
                                <div key={i} className="m-7">
                                    <div>{el.name}</div>
                                    <div>
                                        {el.temperature}˚{el.temperatureUnit}
                                    </div>
                                    <div>Wind Speed: {el.windSpeed}</div>
                                    <div>Wind Direction: {el.windSpeed}</div>
                                    <div>{el.detailedForecast}</div>
                                    {i !== activeData.length - 1 ? (
                                        <div className="border-b-2 w-5/6 border-slate-200 mt-6 mx-auto"></div>
                                    ) : null}
                                </div>
                            );
                        }
                    )}
                </div>
            ) : null}
        </>
    );
};

export default DailyForecast;
