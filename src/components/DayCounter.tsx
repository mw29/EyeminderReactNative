import React from 'react';
import {View, Text} from 'react-native';
import HalfArc from './HalfArc';

// TODO: Update this to check if contacts are weekly or monthly
const totalWearableDayCount = 30;

// TODO: Get days worn
const daysWorn = 5;

function DayCounter(): React.JSX.Element {
  return (
    <View>
      <HalfArc
        progress={daysWorn}
        totalWearableDays={totalWearableDayCount}
      />
    </View>
  );
}

export default DayCounter;
