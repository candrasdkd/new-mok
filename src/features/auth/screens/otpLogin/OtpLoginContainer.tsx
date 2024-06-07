import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { otpLoginSuccess } from '../../store/authSlice';
import OtpLoginScreen from './OtpLoginScreen';
import { RootState } from '../../../../redux/rootReducer';
import { sendPostRequestWithoutHeader } from '../../../../utils/helpers';
import { REST_URL_SEND_OTP } from '../../../../utils/api';
import { NAV_NAME_HOME } from '../../../../utils/constants';

const OtpLoginContainer: React.FC<{ navigation: any }> = ({ navigation }) => {
    const dispatch = useDispatch();
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false)
    const authData = useSelector((state: RootState) => state.auth.authData);
    console.log('authData', authData);


    const handleSubmit = async () => {
        setLoading(true)
        const body = {
            username: authData?.username,
            otp
        }
        try {
            await sendPostRequestWithoutHeader(REST_URL_SEND_OTP, body)
                .then((response) => {
                    setLoading(false)
                    dispatch(otpLoginSuccess({ ...authData, ...response }));
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
