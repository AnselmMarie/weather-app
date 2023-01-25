import express from 'express';

import { getForecast } from './forecast-controller';

const router = express.Router();

router.get('/api/forecast', getForecast);

export { router as getForecastRouter };
