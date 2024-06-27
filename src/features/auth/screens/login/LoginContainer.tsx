import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, setAuthData } from '../../../../store/slice/authSlice';
import LoginScreen from './LoginScreen';
import { RootState } from '../../../../store/rootReducer';
import { sendPostRequestWithoutHeader } from '../../../../utils/helpers';
import { REST_URL_LOGIN } from '../../../../utils/api';
import { NAV_NAME_HOME, NAV_NAME_OTP_LOGIN } from '../../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const LoginContainer: React.FC<{ navigation: any }> = ({ navigation }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const authData = useSelector((state: RootState) => state.auth.authData);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const getAsyncStorageData = async () => {
        try {
            const asyncData = await AsyncStorage.getItem('authentication');
            if (isAuthenticated || (asyncData && JSON.parse(asyncData).Authorization)) {
                if (asyncData) {
                    dispatch(setAuthData({ ...authData, token: JSON.parse(asyncData).Authorization }));
                }
                navigation.replace(NAV_NAME_HOME);
            }
        } catch (error) {
            console.log('Error fetching AsyncStorage data:', error);
        }
    };
    useEffect(() => {
        // Jika pengguna sudah login, langsung alihkan ke halaman Home

        getAsyncStorageData();
    }, []);


    const handleLogin = async () => {
        setLoading(true)
        const body = {
            username,
            password
        }
        try {
            await sendPostRequestWithoutHeader(REST_URL_LOGIN, body)
                .then((response) => {
                    setLoading(false)
                    dispatch(loginSuccess({ ...response, username, }));
                    navigation.replace(NAV_NAME_OTP_LOGIN);
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        // navigation.replace(NAV_NAME_OTP_LOGIN);
    };

    return <LoginScreen
        onLogin={handleLogin}
        username={username}
        onChangeUsername={setUsername}
        password={password}
        onChangePassword={setPassword}
        loading={loading}
    />;
};

export default LoginContainer;
