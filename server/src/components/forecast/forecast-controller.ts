import axios from 'axios';
import { Request, Response } from 'express';

import { ENV } from '../../config/global';
import { formatData } from './forecast-helper';

const getForecast = async (req: Request, res: Response) => {
    const query = req?.url?.split('?');

    // const addressResults = await axios
    //     .get(`${ENV.DOMAIN}/api/geocoding/address?${query[1]}`)
    //     .then((res) => {
    //         return res.data;
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         return err;
    //     });

    // if (
    //     addressResults?.error ||
    //     !addressResults?.addressMatches[0]?.coordinates
    // ) {
    //     return res.status(400).json({ error: 'Endpoint Failed' });
    // }

    // const coordinates = addressResults?.addressMatches[0]?.coordinates;
    // const pointResults = await axios
    //     .get(
    //         `${ENV.DOMAIN}/api/weather/point/${coordinates?.y},${coordinates?.x}`
    //     )
    //     .then((res) => {
    //         return res.data;
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         return err;
    //     });

    // if (pointResults?.error || !pointResults?.properties?.forecast) {
    //     return res.status(400).json({ error: 'Endpoint Failed' });
    // }

    // const weatherResults = await axios
    //     .get(pointResults.properties.forecast)
    //     .then((res) => {
    //         return res.data;
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         return err;
    //     });

    // if (pointResults?.error || !weatherResults?.properties?.periods) {
    //     return res.status(400).json({ error: 'Endpoint Failed' });
    // }

    res.json([
        {
            id: '01e955b0-3dc6-4deb-8d83-a6c5799ba68b',
            forecasts: {
                today: [
                    {
                        number: 1,
                        name: 'Overnight',
                        startTime: '2023-07-02T03:00:00-04:00',
                        endTime: '2023-07-02T06:00:00-04:00',
                        isDaytime: false,
                        temperature: 72,
                        temperatureUnit: 'F',
                        temperatureTrend: null,
                        probabilityOfPrecipitation: {
                            unitCode: 'wmoUnit:percent',
                            value: null,
                        },
                        dewpoint: {
                            unitCode: 'wmoUnit:degC',
                            value: 22.22222222222222,
                        },
                        relativeHumidity: {
                            unitCode: 'wmoUnit:percent',
                            value: 90,
                        },
                        windSpeed: '5 mph',
                        windDirection: 'SE',
                        icon: 'https://api.weather.gov/icons/land/night/few?size=medium',
                        shortForecast: 'Mostly Clear',
                        detailedForecast:
                            'Mostly clear, with a low around 72. Southeast wind around 5 mph.',
                    },
                ],
                sunday: [
                    {
                        number: 2,
                        name: 'Sunday',
                        startTime: '2023-07-02T06:00:00-04:00',
                        endTime: '2023-07-02T18:00:00-04:00',
                        isDaytime: true,
                        temperature: 95,
                        temperatureUnit: 'F',
                        temperatureTrend: null,
                        probabilityOfPrecipitation: {
                            unitCode: 'wmoUnit:percent',
                            value: 30,
                        },
                        dewpoint: {
                            unitCode: 'wmoUnit:degC',
                            value: 23.333333333333332,
                        },
                        relativeHumidity: {
                            unitCode: 'wmoUnit:percent',
                            value: 92,
                        },
                        windSpeed: '5 to 10 mph',
                        windDirection: 'SW',
                        icon: 'https://api.weather.gov/icons/land/day/sct/tsra_hi,30?size=medium',
                        shortForecast:
                            'Mostly Sunny then Chance Showers And Thunderstorms',
                        detailedForecast:
                            'A chance of showers and thunderstorms after 2pm. Mostly sunny, with a high near 95. Heat index values as high as 101. Southwest wind 5 to 10 mph, with gusts as high as 20 mph. Chance of precipitation is 30%. New rainfall amounts between a tenth and quarter of an inch possible.',
                    },
                    {
                        number: 3,
                        name: 'Sunday Night',
                        startTime: '2023-07-02T18:00:00-04:00',
                        endTime: '2023-07-03T06:00:00-04:00',
                        isDaytime: false,
                        temperature: 73,
                        temperatureUnit: 'F',
                        temperatureTrend: null,
                        probabilityOfPrecipitation: {
                            unitCode: 'wmoUnit:percent',
                            value: 30,
                        },
                        dewpoint: {
                            unitCode: 'wmoUnit:degC',
                            value: 22.77777777777778,
                        },
                        relativeHumidity: {
                            unitCode: 'wmoUnit:percent',
                            value: 91,
                        },
                        windSpeed: '5 to 10 mph',
                        windDirection: 'SW',
                        icon: 'https://api.weather.gov/icons/land/night/tsra_hi,30?size=medium',
                        shortForecast: 'Chance Showers And Thunderstorms',
                        detailedForecast:
                            'A chance of showers and thunderstorms before 4am. Mostly cloudy, with a low around 73. Heat index values as high as 97. Southwest wind 5 to 10 mph. Chance of precipitation is 30%. New rainfall amounts between a tenth and quarter of an inch possible.',
                    },
                ],
                monday: [
                    {
                        number: 4,
                        name: 'Monday',
                        startTime: '2023-07-03T06:00:00-04:00',
                        endTime: '2023-07-03T18:00:00-04:00',
                        isDaytime: true,
                        temperature: 92,
                        temperatureUnit: 'F',
                        temperatureTrend: null,
                        probabilityOfPrecipitation: {
                            unitCode: 'wmoUnit:percent',
                            value: 50,
                        },
                        dewpoint: {
                            unitCode: 'wmoUnit:degC',
                            value: 22.77777777777778,
                        },
                        relativeHumidity: {
                            unitCode: 'wmoUnit:percent',
                            value: 91,
                        },
                        windSpeed: '5 to 10 mph',
                        windDirection: 'W',
                        icon: 'https://api.weather.gov/icons/land/day/tsra_sct,20/tsra_sct,50?size=medium',
                        shortForecast: 'Chance Showers And Thunderstorms',
                        detailedForecast:
                            'A chance of showers and thunderstorms after 8am. Partly sunny, with a high near 92. Heat index values as high as 98. West wind 5 to 10 mph. Chance of precipitation is 50%.',
                    },
                    {
                        number: 5,
                        name: 'Monday Night',
                        startTime: '2023-07-03T18:00:00-04:00',
                        endTime: '2023-07-04T06:00:00-04:00',
                        isDaytime: false,
                        temperature: 73,
                        temperatureUnit: 'F',
                        temperatureTrend: null,
                        probabilityOfPrecipitation: {
                            unitCode: 'wmoUnit:percent',
                            value: 50,
                        },
                        dewpoint: {
                            unitCode: 'wmoUnit:degC',
                            value: 22.22222222222222,
                        },
                        relativeHumidity: {
                            unitCode: 'wmoUnit:percent',
                            value: 94,
                        },
                        windSpeed: '5 to 10 mph',
                        windDirection: 'W',
                        icon: 'https://api.weather.gov/icons/land/night/tsra_sct,50/bkn,20?size=medium',
                        shortForecast:
                            'Chance Showers And Thunderstorms then Mostly Cloudy',
                        detailedForecast:
                            'A chance of showers and thunderstorms before 8pm. Mostly cloudy, with a low around 73. West wind 5 to 10 mph. Chance of precipitation is 50%.',
                    },
                ],
                tuesday: [
                    {
                        number: 7,
                        name: 'Tuesday Night',
                        startTime: '2023-07-04T18:00:00-04:00',
                        endTime: '2023-07-05T06:00:00-04:00',
                        isDaytime: false,
                        temperature: 72,
                        temperatureUnit: 'F',
                        temperatureTrend: null,
                        probabilityOfPrecipitation: {
                            unitCode: 'wmoUnit:percent',
                            value: 50,
                        },
                        dewpoint: {
                            unitCode: 'wmoUnit:degC',
                            value: 22.77777777777778,
                        },
                        relativeHumidity: {
                            unitCode: 'wmoUnit:percent',
                            value: 99,
                        },
                        windSpeed: '0 to 10 mph',
                        windDirection: 'W',
                        icon: 'https://api.weather.gov/icons/land/night/bkn,50/bkn,20?size=medium',
                        shortForecast: 'Mostly Cloudy',
                        detailedForecast:
                            'Mostly cloudy, with a low around 72. Chance of precipitation is 50%.',
                    },
                ],
                wednesday: [
                    {
                        number: 8,
                        name: 'Wednesday',
                        startTime: '2023-07-05T06:00:00-04:00',
                        endTime: '2023-07-05T18:00:00-04:00',
                        isDaytime: true,
                        temperature: 91,
                        temperatureUnit: 'F',
                        temperatureTrend: null,
                        probabilityOfPrecipitation: {
                            unitCode: 'wmoUnit:percent',
                            value: 60,
                        },
                        dewpoint: {
                            unitCode: 'wmoUnit:degC',
                            value: 22.77777777777778,
                        },
                        relativeHumidity: {
                            unitCode: 'wmoUnit:percent',
                            value: 100,
                        },
                        windSpeed: '5 mph',
                        windDirection: 'NW',
                        icon: 'https://api.weather.gov/icons/land/day/bkn,30/bkn,60?size=medium',
                        shortForecast: 'Partly Sunny',
                        detailedForecast:
                            'Partly sunny, with a high near 91. Chance of precipitation is 60%.',
                    },
                    {
                        number: 9,
                        name: 'Wednesday Night',
                        startTime: '2023-07-05T18:00:00-04:00',
                        endTime: '2023-07-06T06:00:00-04:00',
                        isDaytime: false,
                        temperature: 72,
                        temperatureUnit: 'F',
                        temperatureTrend: null,
                        probabilityOfPrecipitation: {
                            unitCode: 'wmoUnit:percent',
                            value: 60,
                        },
                        dewpoint: {
                            unitCode: 'wmoUnit:degC',
                            value: 22.77777777777778,
                        },
                        relativeHumidity: {
                            unitCode: 'wmoUnit:percent',
                            value: 100,
                        },
                        windSpeed: '5 mph',
                        windDirection: 'W',
                        icon: 'https://api.weather.gov/icons/land/night/bkn,60/bkn,30?size=medium',
                        shortForecast: 'Mostly Cloudy',
                        detailedForecast:
                            'Mostly cloudy, with a low around 72. Chance of precipitation is 60%.',
                    },
                ],
                thursday: [
                    {
                        number: 10,
                        name: 'Thursday',
                        startTime: '2023-07-06T06:00:00-04:00',
                        endTime: '2023-07-06T18:00:00-04:00',
                        isDaytime: true,
                        temperature: 90,
                        temperatureUnit: 'F',
                        temperatureTrend: null,
                        probabilityOfPrecipitation: {
                            unitCode: 'wmoUnit:percent',
                            value: 60,
                        },
                        dewpoint: {
                            unitCode: 'wmoUnit:degC',
                            value: 22.77777777777778,
                        },
                        relativeHumidity: {
                            unitCode: 'wmoUnit:percent',
                            value: 100,
                        },
                        windSpeed: '5 mph',
                        windDirection: 'W',
                        icon: 'https://api.weather.gov/icons/land/day/bkn,30/bkn,60?size=medium',
                        shortForecast: 'Partly Sunny',
                        detailedForecast:
                            'Partly sunny, with a high near 90. Chance of precipitation is 60%.',
                    },
                ],
            },
        },
    ]);
    // res.json(formatData(weatherResults?.properties?.periods));
};

export { getForecast };
