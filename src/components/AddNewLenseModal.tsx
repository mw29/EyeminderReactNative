import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DurationToggle from './DurationToggle';

type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddNewLenseModal({showModal, setShowModal}: Props): React.JSX.Element {
  return (
    <Modal visible={showModal} transparent animationType="none">
      <TouchableOpacity
        onPressOut={() => setShowModal(false)}
        style={styles.overlay}>
        <View style={styles.bottomModalContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>New Lenses</Text>
            <TouchableOpacity
              onPress={() => console.log('TODO: Implement date modal')}>
              <Text>🗓️ Today</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.durationToggleContainer}>
            <DurationToggle/>
          </View>
          <TouchableOpacity
            style={styles.addLensesButton}
            onPress={() => [
              console.log('TODO: implement add lense'),
              setShowModal(false),
            ]}>
            <Text style={styles.addLensesButtonText}>Add Lenses</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
  },
  bottomModalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
    justifyContent: 'flex-start',
    padding: 22,
    paddingBottom: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 500,
  },
  durationToggleContainer: {
    marginVertical: 15,
  },
  addLensesButton: {
    alignItems: 'center',
    backgroundColor: '#4374B0',
    borderRadius: 20,
    padding: 8,
  },
  addLensesButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 500,
  },
});

export default AddNewLenseModal;
