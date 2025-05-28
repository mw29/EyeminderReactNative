import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type HalfArcProps = {
  progress: number;
  totalWearableDays: number;
};

const HalfArc: React.FC<HalfArcProps> = ({progress, totalWearableDays}) => {
  const size = 300;
  const strokeWidth = 33;
  const radius = (size - strokeWidth) / 2;
  const centerX = size / 2;
  const centerY = size / 2;

  const startRad = (270 - 90) * (Math.PI / 180);
  const fullEndRad = startRad + Math.PI;

  const progressRad =
    Math.PI * (Math.max(0, Math.min(100, progress)) / totalWearableDays);

  const progressEndRad = startRad + progressRad;

  const startX = centerX + radius * Math.cos(startRad);
  const startY = centerY + radius * Math.sin(startRad);
  const fullEndX = centerX + radius * Math.cos(fullEndRad);
  const fullEndY = centerY + radius * Math.sin(fullEndRad);

  const progressEndX = centerX + radius * Math.cos(progressEndRad);
  const progressEndY = centerY + radius * Math.sin(progressEndRad);

  const largeArcFlag = 0;

  const sweepFlag = 1;

  const backgroundPathData = [
    `M ${startX} ${startY}`, 
    `A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${fullEndX} ${fullEndY}`, 
  ].join(' ');

  const progressPathData =
    progress > 0
      ? [
          `M ${startX} ${startY}`, 
          `A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${progressEndX} ${progressEndY}`, // Arc to progress point
        ].join(' ')
      : '';

  return (
    <View style={[{width: size, height: size}]}>
      <Svg width={size} height={size} style={{backgroundColor: 'transparent'}}>
        <Path
          d={backgroundPathData}
          stroke={'#D9D9D9'}
          strokeWidth={strokeWidth}
          fill={'none'}
          strokeLinecap="round"
        />
        {progress > 0 && (
          <Path
            d={progressPathData}
            stroke={'#4374B0'}
            strokeWidth={strokeWidth}
            fill={'none'}
            strokeLinecap="round"
          />
        )}
      </Svg>
    </View>
  );
};

export default HalfArc;
