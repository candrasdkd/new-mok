// src/App.tsx

import React from 'react';
import { Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, OtpLoginScreen } from '../features/auth';
import HomeScreen from '../features/home';

const Stack = createStackNavigator();
const av = new Animated.Value(0);
av.addListener(() => { return });
const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}
        >
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Otp Login"
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}
        >
          {props => <OtpLoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}
        >
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
