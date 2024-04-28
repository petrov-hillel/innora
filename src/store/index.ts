import { configureStore } from '@reduxjs/toolkit';
import actions from './actions';

const store = configureStore({
  reducer: actions,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;