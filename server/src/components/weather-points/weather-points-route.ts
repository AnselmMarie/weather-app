import express from 'express';

import { getWeatherPoint } from './weather-points-controller';

const router = express.Router();

router.get('/api/weather/point/:y,:x', getWeatherPoint);

export { router as getWeatherPointsRouter };
