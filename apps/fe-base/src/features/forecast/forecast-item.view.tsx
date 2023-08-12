import { ReactElement } from 'react';

import { UiCard } from '@weather-app/design-system';

const ForecastListItem = ({ el, i, activeDay, onChangeActiveDay }: any): ReactElement => {
  const isActive = !!(i === 0 && activeDay === 'today') || activeDay === el?.name?.toLowerCase();
  return (
    <UiCard
      cardClasses="w-28 h-60 cursor-pointer text-center p-4 mb-4 mx-2"
      raised={isActive}
      onClick={() => onChangeActiveDay(i === 0 ? 'today' : el.name)}
    >
      <img alt={el?.icon} className="rounded-full mt-2 mb-2 mx-auto" src={el?.icon} />
      <b>{el.name}</b>
      <br />
      {el.temperature}˚{el.temperatureUnit}
    </UiCard>
  );
};

export default ForecastListItem;
