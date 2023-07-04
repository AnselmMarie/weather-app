import { useEffect, useState } from 'react';

import { SelectChangeEvent } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { IForecastPeriods, selectWeatherById } from '../../services/weather-address';

import { activeForecast } from '.';

const useWeatherForecastLogic = () => {
  const dispatch = useAppDispatch();
  const [weatherData, setWeatherData] = useState<IForecastPeriods[]>([]);
  const [currentForecastList, setCurrentForecastList] = useState<IForecastPeriods[]>([]);
  const activeDay = useAppSelector((state) => state.forecast.active);
  const data: any = useAppSelector((state) =>
    selectWeatherById(state, '01e955b0-3dc6-4deb-8d83-a6c5799ba68b')
  );

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

    const forecastData = data?.forecasts;

    const results = [];
    const keys = Object.keys(forecastData);

    for (const day of keys) {
      const { [day]: arr } = forecastData;
      if (arr[0]) results.push(arr[0]);
    }

    changeActiveDay('today');
    setWeatherData(results);
    setCurrentForecastList(results);
  }, [JSON.stringify(data)]);

  return {
    data,
    currentForecastList,
    activeDay,
    onChangeActiveDay: changeActiveDay,
    onChangeForecastAmount: changeForecastAmount,
  };
};

export default useWeatherForecastLogic;
