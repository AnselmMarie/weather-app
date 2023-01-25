import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ENV } from '../../configs/global';
import { formatData } from './weather-address-helper';
import { IAddress, IForecastFormatted } from '.';

interface WeatherAddress {
    data: IForecastFormatted | null;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    error: any | null;
    currentRequestId: string | null;
}

const initialState: WeatherAddress = {
    data: null,
    isIdle: true,
    isLoading: false,
    isSuccess: false,
    error: null,
    currentRequestId: null,
};

/**
 * GET endpoint for the forecast response
 */
export const fetchForecastByAddress = createAsyncThunk(
    'api/forecast',
    async (address: IAddress | null) => {
        const streetAddress = address?.streetAddress?.replace(/(\s)/g, '+');
        const city = address?.city?.replace(/(\s)/g, '+');

        const response = await axios.get(
            `${ENV.SERVER_DOMAIN}/api/forecast?street=${streetAddress}&city=${city}&state=${address?.state}&zip=${address?.zipCode}`
        );
        const formattedData = formatData(response.data);

        return formattedData;
    }
);

/**
 * Redux slice for the weather address api
 */
export const weatherAddressApiSlice = createSlice({
    name: 'weatherAddressApi',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchForecastByAddress.pending, (state, action) => {
                if (state.isIdle) {
                    state.isLoading = true;
                    state.isSuccess = false;
                    state.currentRequestId = action.meta.requestId;
                    state.error = null;
                }
            })
            .addCase(fetchForecastByAddress.fulfilled, (state, action) => {
                const { requestId } = action.meta;
                if (state.isLoading && state.currentRequestId === requestId) {
                    state.data = action.payload;
                    state.error = null;
                    state.currentRequestId = null;

                    state.isIdle = true;
                    state.isSuccess = true;
                    state.isLoading = false;
                }
            })
            .addCase(fetchForecastByAddress.rejected, (state, action) => {
                const { requestId } = action.meta;
                if (state.isLoading && state.currentRequestId === requestId) {
                    state.error = action.error;
                    state.currentRequestId = null;

                    state.isIdle = true;
                    state.isLoading = false;
                    state.isSuccess = false;
                }
            });
    },
});

export default weatherAddressApiSlice;
