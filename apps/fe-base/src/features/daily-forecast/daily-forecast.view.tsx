import { ReactElement } from 'react';

import { IForecastPeriods } from '../../services/weather-address';

import DailyForecastItem from './daily-forecast-item.view';
import useDailyForecastLogic from './use-daily-forecast.logic';

const DailyForecast = (): ReactElement => {
  const { activeData } = useDailyForecastLogic();

  return (
    <div>
      {activeData.length > 0 ? (
        <div className="daily-forecast__wrapper mt-7 text-center">
          <h2 className="font-bold">Daily Forecast</h2>
          {activeData.map((el: IForecastPeriods, i: number): ReactElement => {
            return <DailyForecastItem key={i} el={el} i={i} activeData={activeData} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default DailyForecast;
