import { ReactElement } from 'react';

import { UiSelect } from '@weather-app/design-system';

import { IForecastPeriods } from '../../services/weather-address';

import ForecastListItem from './forecast-item.view';
import ForecastWarningText from './forecast-warning-text.view';
import { menuItemsObj } from './forecast.constant';
import useWeatherForecastLogic from './use-forecast.logic';

const Forecast = (): ReactElement => {
  const { data, currentForecastList, activeDay, onChangeActiveDay, onChangeForecastAmount } =
    useWeatherForecastLogic();

  return (
    <>
      <div className="text-center mb-6">
        {!data && !activeDay ? (
          <ForecastWarningText />
        ) : (
          <UiSelect
            label="Select Forecast"
            defaultValue="7"
            menuItems={menuItemsObj}
            onChange={onChangeForecastAmount}
          />
        )}
      </div>
      <div className="tw--flex-container tw--flex-center mx-auto min-w-1024">
        {currentForecastList?.map((el: IForecastPeriods, i: number): ReactElement => {
          return (
            <ForecastListItem
              key={i}
              el={el}
              i={i}
              activeDay={activeDay}
              onChangeActiveDay={onChangeActiveDay}
            />
          );
        })}
      </div>
    </>
  );
};

export default Forecast;
