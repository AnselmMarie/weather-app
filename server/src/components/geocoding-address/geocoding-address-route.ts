import express from 'express';

import { getGeoAddress } from './geocoding-address-controller';

const router = express.Router();

router.get('/api/geocoding/address', getGeoAddress);

export { router as getGeoAddressRouter };
