import { ENV } from '../../configs/global';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: ENV.SERVER_DOMAIN }),
    tagTypes: ['Weather'],
    endpoints: (_) => ({}),
});
