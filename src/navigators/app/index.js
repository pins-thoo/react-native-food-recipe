import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Selectors from 'selectors';
import Dashboard from 'containers/Dashboard';
import Auth from '../auth';
import { navigationRef } from './AppNavigationService';

const App = () => {
  const token = useSelector(Selectors.getToken);
  const isStoreRehydrated = useSelector(Selectors.isStoreRehydrated);
  return (
    <NavigationContainer ref={navigationRef}>
      {isStoreRehydrated && !token && <Auth />}
      {isStoreRehydrated && token && <Dashboard />}
    </NavigationContainer>
  );
};

export default App;
