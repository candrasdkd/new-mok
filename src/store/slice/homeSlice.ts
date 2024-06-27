// src/store/slices/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: HomeState = {
    activeMenuId: 1,
    announcementData: [],
    downloadingAnnouncement: false,
    appData: [],
    downloadingApp: false,
    tutorialDone: false,
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        changeMenu(state, action: PayloadAction<any>) {
            state.activeMenuId = action.payload;
        },
        changeStatusOnBoarding(state, action: PayloadAction<boolean>) {
            state.tutorialDone = action.payload;
        },
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
        fetchAppStart(state) {
            state.downloadingApp = true;
        },
        fetchAppSuccess(state, action: PayloadAction<AppItem[]>) {
            state.appData = action.payload;
            state.downloadingApp = false;
        },
        fetchAppEnd(state) {
            state.downloadingApp = false;
        },
    },
});

export const {
    changeMenu, fetchAnnouncementStart, fetchAnnouncementSuccess, fetchAnnouncementEnd,
    fetchAppStart, fetchAppSuccess, fetchAppEnd, changeStatusOnBoarding
} = homeSlice.actions;

export default homeSlice.reducer;

