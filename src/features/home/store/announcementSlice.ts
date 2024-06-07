// src/store/slices/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AnnouncementState = {
  announcementData: [],
  downloadingAnnouncement: false,
};

const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    fetchAnnouncementStart(state) {
      state.downloadingAnnouncement = true;
    },
    fetchAnnouncementSuccess(state, action: PayloadAction<CarouselItem[]>) {
      state.announcementData = action.payload;
      state.downloadingAnnouncement = false; 
    },
    fetchAnnouncementEnd(state) {
      state.downloadingAnnouncement = false;
    },
  },
});

export const { fetchAnnouncementStart, fetchAnnouncementSuccess, fetchAnnouncementEnd } = announcementSlice.actions;

export default announcementSlice.reducer;
