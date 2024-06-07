// src/store/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from '../features/auth/store/authSlice';
import announcementReducer from '../features/home/store/announcementSlice';
import appReducer from '../features/home/store/appSlice';

const rootReducer = combineReducers({
  auth: loginReducer,
  announcement: announcementReducer,
  app: appReducer
  // Tambahkan reducer lain jika diperlukan di sini
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
