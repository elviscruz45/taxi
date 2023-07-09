import {View, Text} from 'react-native';
import React from 'react';
import {MapScreen} from './screens/MapScreen';
import * as Location from 'expo-location';
import {LocationPersmissionsService} from './services/LocationPersmissionsService';
import {ThemeProvider} from 'theme/ThemeProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MapScreen />
        <LocationPersmissionsService />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
