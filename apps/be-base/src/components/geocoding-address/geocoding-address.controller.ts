import axios from 'axios';
import { Request, Response } from 'express';

import { ENV } from '@be/config/global';

const getGeoAddress = async (req: Request, res: Response) => {
  const query = req?.url.split('?');

  const results = await axios
    .get(
      `${ENV.GEOCODING_DOMAIN}/geocoder/geographies/address?${query[1]}&benchmark=Public_AR_Census2020&vintage=Census2020_Census2020&layers=10&format=json`
    )
    .then(function (res) {
      return res?.data?.result;
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

export { getGeoAddress };
