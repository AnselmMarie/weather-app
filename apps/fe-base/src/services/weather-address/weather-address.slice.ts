import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';

import { apiSlice } from '../api/api.slice';

import { IAddress } from './weather-address.interface';

const weatherAdapter = createEntityAdapter();

const initialState = weatherAdapter.getInitialState();

export const weatherApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (address: IAddress | null) => {
        return {
          url: '/api/forecast',
          params: {
            street: address?.streetAddress,
            city: address?.city,
            state: address?.state,
            zipCode: address?.zipCode,
          },
        };
      },
      transformResponse: (responseData: any[]) => {
        return weatherAdapter.setAll(initialState, responseData);
      },
      serializeQueryArgs: () => {
        return 'weather-query';
      },
    }),
  }),
});

export const { useGetWeatherQuery, useLazyGetWeatherQuery } = weatherApi;

// returns the query result object
export const selectWeatherResult = weatherApi.endpoints.getWeather.select(null);

// Creates memoized selector
const selectWeatherData = createSelector(
  selectWeatherResult,
  (weatherResult) => weatherResult.data // normalized state object with ids & entities
);

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllWeather,
  selectById: selectWeatherById,
  selectIds: selectWeatherIds,
  // Pass in a selector that returns the posts slice of state
} = weatherAdapter.getSelectors((state: any) => selectWeatherData(state) ?? initialState);
