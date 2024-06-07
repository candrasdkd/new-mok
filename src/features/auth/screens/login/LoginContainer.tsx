import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../store/authSlice';
import LoginScreen from './LoginScreen';
import { RootState } from '../../../../redux/rootReducer';
import { sendPostRequestWithoutHeader } from '../../../../utils/helpers';
import { REST_URL_LOGIN } from '../../../../utils/api';
import { NAV_NAME_HOME, NAV_NAME_OTP_LOGIN } from '../../../../utils/constants';

const LoginContainer: React.FC<{ navigation: any }> = ({ navigation }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    useEffect(() => {
        // Jika pengguna sudah login, langsung alihkan ke halaman Home
        if (isAuthenticated) {
            navigation.replace(NAV_NAME_HOME);
        }
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
                    console.log('response', response);
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
