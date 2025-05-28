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

  // Convert angles to radians and adjust for SVG coordinate system
  // 270 starts the arc at the left
  // 0 - top
  // 90 - right
  // 180 - bottom
  const startRad = (270 - 90) * (Math.PI / 180);
  // Math.PI = clockwise, -Math.PI = counterclockwise
  const fullEndRad = startRad + Math.PI;

  // Calculate progress-based end angle
  const progressRadians =
    Math.PI * (Math.max(0, Math.min(100, progress)) / totalWearableDays);

  // clockwise: startRad + progressRadians
  // counterclockwise: startRad - progressRadians
  const progressEndRad = startRad + progressRadians;

  // Calculate start and end points for full arc (background)
  const startX = centerX + radius * Math.cos(startRad);
  const startY = centerY + radius * Math.sin(startRad);
  const fullEndX = centerX + radius * Math.cos(fullEndRad);
  const fullEndY = centerY + radius * Math.sin(fullEndRad);

  // Calculate end point for progress arc
  const progressEndX = centerX + radius * Math.cos(progressEndRad);
  const progressEndY = centerY + radius * Math.sin(progressEndRad);

  // Determine the large arc flag based on direction
  const largeArcFlag = 0; // Always 0 for half arc (180 degrees)

  // clockwise: 1
  // counterclockwise: 0
  const sweepFlag = 1;

  // Determine large arc flag for progress (only if progress > 50%)
  const progressLargeArcFlag = progress > 50 ? 1 : 0;

  // Create the SVG path for full background arc
  const backgroundPathData = [
    `M ${startX} ${startY}`, // Move to start point
    `A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${fullEndX} ${fullEndY}`, // Arc to end point
  ].join(' ');

  // Create the SVG path for progress arc
  const progressPathData =
    progress > 0
      ? [
          `M ${startX} ${startY}`, // Move to start point
          `A ${radius} ${radius} 0 ${progressLargeArcFlag} ${sweepFlag} ${progressEndX} ${progressEndY}`, // Arc to progress point
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
