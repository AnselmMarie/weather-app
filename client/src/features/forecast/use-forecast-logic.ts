import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';

import { IForecastPeriods } from '../../services/weather-address';
import { activeForecast } from '.';

const useWeatherForecastLogic = () => {
    const dispatch = useAppDispatch();
    const [weatherData, setWeatherData] = useState<IForecastPeriods[]>([]);
    const activeDay = useAppSelector((state) => state.forecast.active);
    const { data } = useAppSelector((state) => state.weatherAddressApi);

    const changeActiveDay = (day: string): void => {
        dispatch(activeForecast(day.toLowerCase()));
    };

    useEffect(() => {
        if (!data) return;

        const results = [];
        let keys = Object.keys(data);

        for (const day of keys) {
            const { [day]: arr } = data;
            if (arr[0]) results.push(arr[0]);
        }

        changeActiveDay('today');
        setWeatherData(results);
    }, [JSON.stringify(data)]);

    return {
        data,
        weatherData,
        activeDay,
        onChangeActiveDay: changeActiveDay,
    };
};

export default useWeatherForecastLogic;
