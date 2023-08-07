import {View, Text, Modal} from 'react-native';
import React from 'react';
import {Container} from './DestinationModal.styles';
import {RoundButton} from 'components/RoundButton';

interface DestinationModalProps {
  visible: boolean;
  closeModal: () => void;
}

export function DestinationModal({visible, closeModal}: DestinationModalProps) {
  const handleRoundButtonPress = () => {
    closeModal();
  };

  return (
    <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
      <Container>
        <RoundButton
          icon="arrow-back-outline"
          onPress={handleRoundButtonPress}
        />
      </Container>
    </Modal>
  );
}
