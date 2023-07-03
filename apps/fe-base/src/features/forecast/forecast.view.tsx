import React, { ReactElement } from 'react';
import { MenuItem, Select } from '@mui/material';

import { UiCard } from '../../components/card';
import { IForecastPeriods } from '../../services/weather-address';
import useWeatherForecastLogic from './use-forecast.logic';

const Forecast = (): ReactElement => {
    const {
        data,
        currentForecastList,
        activeDay,
        onChangeActiveDay,
        onChangeForecastAmount,
    } = useWeatherForecastLogic();

    return (
        <>
            <div className="text-center">
                {!data && !activeDay ? (
                    'To see a 7-day forecast of an area, click on the "Add Address" button, then submit an address..'
                ) : (
                    <div className="text-center">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Select Forecast"
                            defaultValue="7"
                            onChange={onChangeForecastAmount}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                        </Select>
                    </div>
                )}
            </div>
            <div className="tw--flex-container tw--flex-center space-x-4 mx-auto min-w-1024">
                {currentForecastList?.map(
                    (el: IForecastPeriods, i: number): ReactElement => {
                        const isActive =
                            !!(i === 0 && activeDay === 'today') ||
                            activeDay === el?.name?.toLowerCase();

                        return (
                            <React.Fragment key={i}>
                                <UiCard
                                    classes="w-28 h-48 cursor-pointer text-center"
                                    raised={isActive}
                                    onClick={() =>
                                        onChangeActiveDay(
                                            i === 0 ? 'today' : el.name
                                        )
                                    }
                                >
                                    <img
                                        className="rounded-full mt-2 mb-2 mx-auto"
                                        src={el.icon}
                                    />
                                    <b>{el.name}</b>
                                    <br />
                                    {el.temperature}˚{el.temperatureUnit}
                                </UiCard>
                            </React.Fragment>
                        );
                    }
                )}
            </div>
        </>
    );
};

export default Forecast;
