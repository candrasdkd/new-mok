// src/store/slices/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ProfileState = {
    activeMenuId: 1,
    profileData: {
        competencyBar: [],
        generalBar: [],
        generalInfo: [],
        message: null,
        name: "",
        nrp: "",
        district: "",
        picture: null,
        position: "",
        positionId: "",
        profilePicture: "",
        status: 0,
        url: null,
    },
    downloadingProfile: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        fetchProfileStart(state) {
            state.downloadingProfile = true;
        },
        fetchProfileSuccess(state, action: PayloadAction<ProfileItem>) {
            state.profileData = action.payload;
            state.downloadingProfile = false;
        },
        fetchProfileEnd(state) {
            state.downloadingProfile = false;
        },
    },
});

export const {
    fetchProfileStart, fetchProfileSuccess, fetchProfileEnd,
} = profileSlice.actions;

export default profileSlice.reducer;
