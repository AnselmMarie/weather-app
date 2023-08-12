import { ReactElement } from 'react';

import { DailyForecastItemProps } from './daily-forecast-item.interface';

const DailyForecastItem = ({ el, i, activeData }: DailyForecastItemProps): ReactElement => {
  return (
    <div className="m-7">
      <b>{el.name}</b>
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

export default DailyForecastItem;
