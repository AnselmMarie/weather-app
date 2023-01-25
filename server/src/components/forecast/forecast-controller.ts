import axios from 'axios';
import { Request, Response } from 'express';

import { ENV } from '../../config/global';

const getForecast = async (req: Request, res: Response) => {
    const query = req?.url?.split('?');

    const addressResults = await axios
        .get(`${ENV.DOMAIN}/api/geocoding/address?${query[1]}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });

    if (
        addressResults?.error ||
        !addressResults?.addressMatches[0]?.coordinates
    ) {
        return res.status(400).json({ error: 'Endpoint Failed' });
    }

    const coordinates = addressResults?.addressMatches[0]?.coordinates;
    const pointResults = await axios
        .get(
            `${ENV.DOMAIN}/api/weather/point/${coordinates?.y},${coordinates?.x}`
        )
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });

    if (pointResults?.error || !pointResults?.properties?.forecast) {
        return res.status(400).json({ error: 'Endpoint Failed' });
    }

    const weatherResults = await axios
        .get(pointResults.properties.forecast)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });

    if (pointResults?.error || !weatherResults?.properties?.periods) {
        return res.status(400).json({ error: 'Endpoint Failed' });
    }

    res.json(weatherResults.properties.periods);
};

export { getForecast };
