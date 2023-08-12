import { json } from 'body-parser';
import cors from 'cors';
import express from 'express';

import { getForecastRouter } from '@be/components/forecast/forecast.route';
import { getGeoAddressRouter } from '@be/components/geocoding-address/geocoding-address.route';
import { getWeatherPointsRouter } from '@be/components/weather-points/weather-points.route';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cors());

app.use(getForecastRouter);
app.use(getGeoAddressRouter);
app.use(getWeatherPointsRouter);

export { app };
