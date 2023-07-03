import axios from 'axios';
import { Request, Response } from 'express';

import { ENV } from '../../config/global';

const getWeatherPoint = async (req: Request, res: Response) => {
    const query = req?.url.split('point/');

    const results = await axios
        .get(`${ENV.WEATHER_GOV_DOMAIN}/points/${query[1]}`)
        .then(function (res) {
            return res?.data;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });

    if (results?.code) {
        return res.json({ error: 'Data does not exist' });
    }

    res.json(results);
};

export { getWeatherPoint };
