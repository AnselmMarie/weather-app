import { useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks/redux.hooks';
import { IForecastPeriods } from '../../services/weather-address';

const useDailyForecastLogic = () => {
    const { data } = useAppSelector((state) => state.weatherAddressApi);
    const activeDay = useAppSelector((state) => state.forecast.active);
    const [activeData, setActiveData] = useState<IForecastPeriods[]>([]);

    useEffect(() => {
        if (data?.today) {
            setActiveData(data.today);
        }
    }, [JSON.stringify(data)]);

    useEffect(() => {
        if (data?.[activeDay]) {
            setActiveData(data[activeDay]);
        }
    }, [activeDay]);

    return {
        activeData,
    };
};

export default useDailyForecastLogic;
