// src/components/Login/LoginScreen.tsx

import React from 'react';
import { Text, Button, ActivityIndicator } from 'react-native';
import { BaseScreen, TextInput } from '../../../../globalComponents';
import Styles from "../../styles";

const OtpLoginScreen: React.FC<OtpLoginProps> = ({
    value, loading, onChangeOtp, onSubmitOtp
}) => {
    return (
        <BaseScreen customStyle={Styles.bodyContainer}>
            <Text>OTP Login</Text>
            <TextInput
                value={value}
                placeholder={'Masukkan otp'}
                onChangeText={(e) => onChangeOtp(e)}
            />
            {loading ?
                <ActivityIndicator animating={true} color={'blue'} />
                : <Button title="Send" onPress={onSubmitOtp} />
            }

        </BaseScreen>
    );
};

export default OtpLoginScreen;
