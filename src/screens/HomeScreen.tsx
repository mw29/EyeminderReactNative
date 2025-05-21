import React from 'react';
import {Button, Text, View} from 'react-native';
import {HomeScreenNavigationProp} from '../types/NavigationTypes';

type Props = {
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({navigation}: Props): React.JSX.Element {
  return (
    <View style={{flex: 1,padding: 5, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomePage</Text>
      <Button
        title="Go to the profile screen"
        onPress={() => navigation.navigate('Profile', {name: "Jane"})}
      />
    </View>
  );
}

export default HomeScreen;
