import React from 'react';
import {Text, View} from 'react-native';
import {ProfileScreenRouteProp} from '../types/NavigationTypes';

type Props = {
  route: ProfileScreenRouteProp;
};

function ProfileScreen({route}: Props): React.JSX.Element {
  const {name} = route.params;

  return (
    <View style={{flex: 1, padding: 5, alignItems: 'center', justifyContent: 'center',}}>
      <Text>Welcome, {name}!</Text>
    </View>
  );
}

export default ProfileScreen;
