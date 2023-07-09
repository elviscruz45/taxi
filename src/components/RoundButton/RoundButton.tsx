import {View, Text} from 'react-native';
import React from 'react';
import {StyledPressable} from './RoundButton.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';

interface RoundButtonProps {
  icon: 'ios-menu-outline' | 'arrow-back-outline';
  onPress?: () => void;
}

export const RoundButton = ({icon, onPress}: RoundButtonProps) => {
  const insets = useSafeAreaInsets();
  return (
    <StyledPressable insets={insets} onPress={onPress}>
      <Icon name={icon} size={scale(27)} />
    </StyledPressable>
  );
};
