import React, {useState} from 'react';
import {HomeScreenNavigationProp} from '../types/NavigationTypes';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AddNewLenseModal from './AddNewLenseModal';

function BottomButtons(): React.JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <AddNewLenseModal showModal={showModal} setShowModal={setShowModal} />
      <TouchableOpacity
        style={styles.newPairButtonContainer}
        onPress={() => setShowModal(!showModal)}>
        <Text style={styles.newPairButtonText}>Add New Pair</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('TODO: implement delete lenses')}>
        <Text>🗑️ Delete Current Lenses</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  newPairButtonContainer: {
    width: '85%',
    backgroundColor: '#4374B0',
    borderRadius: 20,
    marginBottom: 13,
    paddingVertical: 8,
  },
  newPairButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 600,
  },
});

export default BottomButtons;
