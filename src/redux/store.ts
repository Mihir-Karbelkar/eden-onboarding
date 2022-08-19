import { configureStore } from '@reduxjs/toolkit';

import wizardFormReducer from './slices/wizard-form.slice';

const store = configureStore({
  reducer: {
    wizardForm: wizardFormReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
