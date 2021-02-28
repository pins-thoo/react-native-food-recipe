import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from 'containers/auth/SignIn';
import SplashScreen from 'containers/SplashScreen';
import SignUp from 'containers/auth/SignUp';
// import ForgotPassword from 'containers/auth/ForgotPassword';


const Stack = createStackNavigator();

const Auth = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Splash">
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Sign Up" component={SignUp} />
    <Stack.Screen name="Log In" component={SignIn} />
    {/* <Stack.Screen name="Forgot Password" component={ForgotPassword} /> */}
  </Stack.Navigator>
);

export default Auth;
