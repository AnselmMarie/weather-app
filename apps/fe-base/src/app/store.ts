import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import forecastSlice from '../features/forecast/forecast.slice';
import { apiSlice, serviceReducers } from '../services';

const preloadedState = {};

/**
 * Configures the redux toolkit store
 */
export const store = configureStore({
  reducer: {
    forecast: forecastSlice.reducer,
    ...serviceReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
