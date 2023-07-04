import { ReactElement } from 'react';

import { UiCard, UiSelect } from '@weather-app/design-system';

import { IForecastPeriods } from '../../services/weather-address';

import { menuItemsObj } from './forecast.constant';
import useWeatherForecastLogic from './use-forecast.logic';

const Forecast = (): ReactElement => {
  const { data, currentForecastList, activeDay, onChangeActiveDay, onChangeForecastAmount } =
    useWeatherForecastLogic();

  const ForecastListItem = ({ el, i }: any): ReactElement => {
    const isActive = !!(i === 0 && activeDay === 'today') || activeDay === el?.name?.toLowerCase();
    return (
      <UiCard
        cardClasses="w-28 h-48 cursor-pointer text-center"
        raised={isActive}
        onClick={() => onChangeActiveDay(i === 0 ? 'today' : el.name)}
      >
        <img alt={el.icon} className="rounded-full mt-2 mb-2 mx-auto" src={el.icon} />
        <b>{el.name}</b>
        <br />
        {el.temperature}˚{el.temperatureUnit}
      </UiCard>
    );
  };

  return (
    <>
      <div className="text-center">
        {!data && !activeDay ? (
          'To see a 7-day forecast of an area, click on the "Add Address" button, then submit an address..'
        ) : (
          <div className="text-center">
            <UiSelect
              label="Select Forecast"
              defaultValue="7"
              menuItems={menuItemsObj}
              onChange={onChangeForecastAmount}
            />
          </div>
        )}
      </div>
      <div className="tw--flex-container tw--flex-center space-x-4 mx-auto min-w-1024">
        {currentForecastList?.map((el: IForecastPeriods, i: number): ReactElement => {
          return <ForecastListItem key={i} el={el} i={i} />;
        })}
      </div>
    </>
  );
};

export default Forecast;
