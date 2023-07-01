import { configureStore } from '@reduxjs/toolkit';

import forecastSlice from '../features/forecast/forecast.slice';
import { weatherAddressApiSlice } from '../services/weather-address';

/**
 * Configures the redux toolkit store
 */
export const store = configureStore({
    reducer: {
        forecast: forecastSlice.reducer,
        weatherAddressApi: weatherAddressApiSlice.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
