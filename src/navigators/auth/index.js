import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from 'containers/Auth';

const Stack = createStackNavigator();

const Auth = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Auth" component={SignIn} />
  </Stack.Navigator>
);

export default Auth;
