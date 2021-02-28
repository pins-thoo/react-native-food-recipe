import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Selectors from 'selectors';
import Auth from '../auth';
import Dashboard from 'containers/Dashboard';
// import Initial from 'containers/Initial';
// import SignIn from 'containers/auth/SignIn';
import { navigationRef } from './AppNavigationService';

const Stack = createStackNavigator();

const App = () => {
  const token = useSelector(Selectors.getToken);
  const isStoreRehydrated = useSelector(Selectors.isStoreRehydrated);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
