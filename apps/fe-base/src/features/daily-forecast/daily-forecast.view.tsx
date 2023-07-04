import { ReactElement } from 'react';

import { IForecastPeriods } from '../../services/weather-address';

import useDailyForecastLogic from './use-daily-forecast.logic';

const DailyForecast = (): ReactElement => {
  const { activeData } = useDailyForecastLogic();

  const DailyForecastItem = ({ el, i }: any): ReactElement => {
    return (
      <div className="m-7">
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
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {activeData.length > 0 ? (
        <div className="daily-forecast__wrapper mt-7 text-center">
          <h1 className="font-bold">Daily Forecast</h1>
          {activeData.map((el: IForecastPeriods, i: number): ReactElement => {
            return <DailyForecastItem key={i} el={el} i={i} />;
          })}
        </div>
      ) : null}
    </>
  );
};

export default DailyForecast;
