import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ForecastState {
    active: string;
}

const initialState: ForecastState = {
    active: '',
};

/**
 * Redux slice to store information for the forecast
 */
export const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {
        activeForecast: (state, action: PayloadAction<string>) => {
            state.active = action.payload;
        },
    },
});

export default forecastSlice;
