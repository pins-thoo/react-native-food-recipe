import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from 'themes';
import AppNavigator from 'navigators/app';

const App = () => (
  <SafeAreaProvider>
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
