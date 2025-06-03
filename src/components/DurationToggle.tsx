import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DurationToggle = () => {
  const [selected, setSelected] = useState<'weekly' | 'monthly'>('weekly');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.duration,
          selected === 'weekly'
            ? styles.selectedSegment
            : styles.unselectedSegment,
          styles.leftSegment,
        ]}
        onPress={() => setSelected('weekly')}>
        <Text
          style={
            selected === 'weekly' ? styles.selectedText : styles.unselectedText
          }>
          Weekly
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.duration,
          selected === 'monthly'
            ? styles.selectedSegment
            : styles.unselectedSegment,
          styles.rightSegment,
        ]}
        onPress={() => setSelected('monthly')}>
        <Text
          style={
            selected === 'monthly' ? styles.selectedText : styles.unselectedText
          }>
          Monthly
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#eaeaea',
    alignSelf: 'center',
  },
  duration: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    flex: 1,
    alignItems: 'center',
  },
  selectedSegment: {
    backgroundColor: '#9E9E9E',
  },
  unselectedSegment: {
    backgroundColor: '#EEEEEE',
  },
  selectedText: {
    fontWeight: '600',
    color: 'black',
  },
  unselectedText: {
    color: '#000',
    opacity: 0.7,
  },
  leftSegment: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  rightSegment: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
});

export default DurationToggle;
