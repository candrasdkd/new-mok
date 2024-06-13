// src/store/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from '../features/auth/store/authSlice';
import homeReducer from '../features/home/store/homeSlice';
import profileReducer from '../features/profile/store/profileSlice';

const rootReducer = combineReducers({
  auth: loginReducer,
  home: homeReducer,
  profile: profileReducer,
  // Tambahkan reducer lain jika diperlukan di sini
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
