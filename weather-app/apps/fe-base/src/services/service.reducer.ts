import { apiSlice } from './api';

export const serviceReducers = {
    [apiSlice.reducerPath]: apiSlice.reducer,
};
