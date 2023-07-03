import {View, Text} from 'react-native';
import React from 'react';
import {MapScreen} from './screens/MapScreen';
import * as Location from 'expo-location';
import {LocationPersmissionsService} from './services/LocationPersmissionsService';

export const App = () => {
  return (
    <>
      <MapScreen />
      <LocationPersmissionsService />
    </>
  );
};
