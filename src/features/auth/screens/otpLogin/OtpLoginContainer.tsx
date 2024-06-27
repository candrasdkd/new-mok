import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthData } from '../../../../store/slice/authSlice';
import { changeStatusOnBoarding } from '../../../../store/slice/homeSlice';
import OtpLoginScreen from './OtpLoginScreen';
import { RootState } from '../../../../store/rootReducer';
import { getHttpHeaders, sendPostRequestWithoutHeader } from '../../../../utils/helpers';
import { REST_URL_SEND_OTP } from '../../../../utils/api';
import { NAV_NAME_HOME } from '../../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpLoginContainer: React.FC<{ navigation: any }> = ({ navigation }) => {
    const dispatch = useDispatch();
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const authData = useSelector((state: RootState) => state.auth.authData);

    const handleSubmit = async () => {
        setLoading(true)
        const body = {
            username: authData?.username,
            otp
        }
        try {
            await sendPostRequestWithoutHeader(REST_URL_SEND_OTP, body)
                .then(async (response) => {
                    setLoading(false)
                    dispatch(setAuthData({ ...authData, ...response }));
                    await AsyncStorage.setItem('authentication', JSON.stringify(await getHttpHeaders(response?.token, '')));
                    dispatch(changeStatusOnBoarding(false))
                    navigation.replace(NAV_NAME_HOME);
                })
                .catch((err) => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };

    return <OtpLoginScreen
        value={otp}
        loading={loading}
        onChangeOtp={setOtp}
        onSubmitOtp={handleSubmit}
    />;
};

export default OtpLoginContainer;
