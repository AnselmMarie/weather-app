import { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';

import { IForecastPeriods } from '../../services/weather-address';
import { activeForecast } from '.';

const useWeatherForecastLogic = () => {
    const dispatch = useAppDispatch();
    const [weatherData, setWeatherData] = useState<IForecastPeriods[]>([]);
    const [currentForecastList, setCurrentForecastList] = useState<
        IForecastPeriods[]
    >([]);
    const activeDay = useAppSelector((state) => state.forecast.active);
    const { data } = useAppSelector((state) => state.weatherAddressApi);

    const changeActiveDay = (day: string): void => {
        dispatch(activeForecast(day.toLowerCase()));
    };

    const changeForecastAmount = (forecast: SelectChangeEvent<any>): void => {
        const newList: IForecastPeriods[] = [];

        for (let loop = 0; loop < forecast.target.value; loop++) {
            newList.push(weatherData[loop]);
        }

        setCurrentForecastList(newList);
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
        setCurrentForecastList(results);
    }, [JSON.stringify(data)]);

    return {
        data,
        weatherData,
        currentForecastList,
        activeDay,
        onChangeActiveDay: changeActiveDay,
        onChangeForecastAmount: changeForecastAmount,
    };
};

export default useWeatherForecastLogic;
