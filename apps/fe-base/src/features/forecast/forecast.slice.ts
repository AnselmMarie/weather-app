import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ForecastState {
  activeDay: string;
}

const initialState: ForecastState = {
  activeDay: '',
};

/**
 * Redux slice to store information for the forecast
 */
export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    activeForecast: (state, action: PayloadAction<string>) => {
      state.activeDay = action.payload;
    },
  },
});

export default forecastSlice;
