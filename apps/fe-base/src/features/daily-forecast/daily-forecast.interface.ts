import { useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks/redux.hooks';
import { IForecastPeriods, selectWeatherById } from '../../services/weather-address';

const useDailyForecastLogic = () => {
  const activeDay = useAppSelector((state) => state.forecast.activeDay);
  const data: any = useAppSelector((state) =>
    selectWeatherById(state, '01e955b0-3dc6-4deb-8d83-a6c5799ba68b')
  );
  const [activeData, setActiveData] = useState<IForecastPeriods[]>([]);

  useEffect(() => {
    if (data?.forecasts?.today) {
      setActiveData(data?.forecasts.today);
    }
  }, [JSON.stringify(data)]);

  useEffect(() => {
    if (data?.forecasts?.[activeDay]) {
      setActiveData(data?.forecasts[activeDay]);
    }
  }, [activeDay]);

  return {
    activeData,
  };
};

export default useDailyForecastLogic;
