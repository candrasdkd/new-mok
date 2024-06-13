// src/App.tsx

import React from 'react';
import { Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, OtpLoginScreen } from '../features/auth';
import { HomeScreen } from '../features/home';
import { ProfileScreen } from '../features/profile';
import { NAV_NAME_HOME, NAV_NAME_LOGIN, NAV_NAME_OTP_LOGIN, NAV_NAME_PROFILE } from '../utils/constants';

const Stack = createStackNavigator();
const av = new Animated.Value(0);
av.addListener(() => { return });
const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NAV_NAME_LOGIN} screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={NAV_NAME_LOGIN}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}
        >
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={NAV_NAME_OTP_LOGIN}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}
        >
          {props => <OtpLoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={NAV_NAME_HOME}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}
        >
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={NAV_NAME_PROFILE}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}
        >
          {props => <ProfileScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
