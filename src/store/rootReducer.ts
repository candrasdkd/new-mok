// src/store/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import homeReducer from './slice/homeSlice';
import profileReducer from './slice/profileSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  profile: profileReducer,
  // Add more reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
