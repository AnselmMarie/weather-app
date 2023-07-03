// import { app } from './app';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import { getForecastRouter } from '../components/forecast/forecast-route';
import { getGeoAddressRouter } from '../components/geocoding-address/geocoding-address-route';
import { getWeatherPointsRouter } from '../components/weather-points/weather-points-route';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cors());

app.use(getForecastRouter);
app.use(getGeoAddressRouter);
app.use(getWeatherPointsRouter);

app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
});

// const start = () => {
//     app.listen(3000, () => {
//         console.log('Listening on port 3000!');
//     });
// };

// start();

// import express from 'express';

// const app = express();

// app.get('/', (req, res) => {
//   res.send({ message: 'Hello API' });
// });
