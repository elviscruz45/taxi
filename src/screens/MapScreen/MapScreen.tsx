import {View, Text} from 'react-native';
import React from 'react';
import {StyledMapView, Container} from './MapScreen.styles';
import {useMapScreen} from './useMapScreen';
import {RoundButton} from 'components/RoundButton';
import {MapSearchBar} from 'components/MapSearchBar';

export const MapScreen = () => {
  const {models, operations} = useMapScreen();
  return (
    <>
      <StyledMapView
        ref={models.mapRef}
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        showsMyLocationButton={false}
        showsCompass={false}
      />
      <MapSearchBar
        onPress={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <RoundButton icon={'ios-menu-outline'} />
    </>
  );
};
