// src/store/slices/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SplashState = {
    isLogin: false,
};

const splashSlice = createSlice({
    name: 'splash',
    initialState,
    reducers: {
        changeOnBoardingStatus(state, action: PayloadAction<boolean>) {
            state.isLogin = action.payload;
        },
    },
});

export const {
    changeOnBoardingStatus,
} = splashSlice.actions;

export default splashSlice.reducer;
