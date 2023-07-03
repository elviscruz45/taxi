import type {UserLocationChangeEvent} from 'react-native-maps';
import {useState, useRef, useEffect} from 'react';
import type MapView from 'react-native-maps';

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export const useMapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const [userLocation, setUserLocation] =
    useState<UserLocationChangeEvent['nativeEvent']['coordinate']>();

  useEffect(() => {
    if (userLocation) {
      mapRef.current?.animateToRegion({
        longitude: userLocation.longitude,
        latitude: userLocation.latitude,
        // longitude: -122.406417,
        // latitude: 37.78583,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  }, [userLocation]);

  const handleUserLocationChange = ({
    nativeEvent: {coordinate},
  }: UserLocationChangeEvent) => {
    console.log(coordinate);
  };

  return {
    models: {mapRef},
    operations: {
      handleUserLocationChange,
    },
  };
};
