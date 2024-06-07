// src/store/slices/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AppState = {
  appData: [],
  downloadingApp: false,
};

const announcementSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetchAppStart(state) {
      state.downloadingApp = true;
    },
    fetchAppSuccess(state, action: PayloadAction<any>) {
      state.appData = action.payload;
      state.downloadingApp = false;
    },
    fetchAppEnd(state) {
      state.downloadingApp = false;
    },
  },
});

export const { fetchAppStart, fetchAppSuccess, fetchAppEnd } = announcementSlice.actions;

export default announcementSlice.reducer;
