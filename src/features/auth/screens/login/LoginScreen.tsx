// src/components/Login/LoginScreen.tsx

import React from 'react';
import { Text, Button, ActivityIndicator } from 'react-native';
import { BaseScreen, TextInput } from '../../../../globalComponents';
import Styles from "../../styles";
import LocalizedString from '../../../../utils/localization';

const LoginScreen: React.FC<LoginScreenProps> = ({
    username, password, loading, onLogin, onChangeUsername, onChangePassword
}) => {
    return (
        <BaseScreen customStyle={Styles.bodyContainer}>
            <Text>Login Screen</Text>
            <TextInput
                value={username}
                editable={!loading}
                placeholder={LocalizedString.loginScreen.labelUsername}
                onChangeText={(e) => onChangeUsername(e)}
            />
            <TextInput
                value={password}
                secureTextEntry={true}
                editable={!loading}
                placeholder={LocalizedString.loginScreen.labelPassword}
                onChangeText={(e) => onChangePassword(e)}
            />
            {loading ?
                <ActivityIndicator animating={true} color={'blue'} />
                : <Button title="Login" onPress={onLogin} />
            }


        </BaseScreen>
    );
};

export default LoginScreen;
