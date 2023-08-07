import {View, Text, Modal} from 'react-native';
import React from 'react';
import {StyledFlatList} from './DestinationModal.styles';
import {RoundButton} from 'components/RoundButton';

interface DestinationModalProps {
  visible: boolean;
  closeModal: () => void;
}

export function DestinationModal({visible, closeModal}: DestinationModalProps) {
  const handleRoundButtonPress = () => {
    closeModal();
  };

  const renderFlatListItem = () => {
    return null;
  };

  return (
    <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
      <StyledFlatList data={[]} renderItem={renderFlatListItem} />
      <RoundButton icon="arrow-back-outline" onPress={handleRoundButtonPress} />
    </Modal>
  );
}
