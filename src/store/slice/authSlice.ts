// src/store/slices/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
    isAuthenticated: false,
    authData: {
        username: '',
        password: '',
        status: 0,
        message: '',
        url: '',
        phone: '',
        expiredDate: '',
        otp: '',
        token: ''
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<any>) {
            state.authData = action.payload;
        },
        setAuthData(state, action: PayloadAction<any>) {
            state.isAuthenticated = true;
            state.authData = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.authData = {
                username: '',
                password: '',
                status: 0,
                message: '',
                url: '',
                phone: '',
                expiredDate: '',
                otp: '',
                token: ''
            };
        },
    },
});

export const { loginSuccess, setAuthData, logout } = authSlice.actions;

export default authSlice.reducer;
