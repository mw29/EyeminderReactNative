import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeScreenNavigationProp} from '../types/NavigationTypes';
import DayCounter from '../components/DayCounter';

type Props = {
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({navigation}: Props): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Eyeminder</Text>
      </View>
      <View style={styles.centerContainer}>
        <DayCounter/>
      </View>
      <View style={styles.footerContainer}>
        <Text>BOTTOM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 500,
    fontSize: 30,
    textAlign: 'center',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
  },
});

export default HomeScreen;
