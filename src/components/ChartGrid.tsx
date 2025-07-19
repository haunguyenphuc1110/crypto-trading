import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../constants/colors';

interface ChartGridProps {
  width: number;
  height: number;
  horizontalLines?: number;
  verticalLines?: number;
  strokeColor?: string;
  strokeWidth?: string;
  opacity?: string;
}

const ChartGrid: React.FC<ChartGridProps> = ({
  width,
  height,
  horizontalLines = 11,
  verticalLines = 10,
  strokeColor = Colors.CHART_AXIS,
  strokeWidth = '0.5',
  opacity = '0.3',
}) => {
  const gridPath = useMemo(() => {
    const horizontalStep = height / horizontalLines;
    const verticalStep = width / verticalLines;

    const horizontalPaths = Array.from(
      { length: horizontalLines + 1 },
      (_, i) => {
        const y = i * horizontalStep;
        return `M 0 ${y} L ${width} ${y}`;
      }
    );

    const verticalPaths = Array.from({ length: verticalLines + 1 }, (_, i) => {
      const x = i * verticalStep;
      return `M ${x} 0 L ${x} ${height}`;
    });

    return [...horizontalPaths, ...verticalPaths].join(' ');
  }, [width, height, horizontalLines, verticalLines]);

  return (
    <Svg width={width} height={height} style={StyleSheet.absoluteFillObject}>
      <Path
        d={gridPath}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        opacity={opacity}
        fill="none"
      />
    </Svg>
  );
};

export default ChartGrid;
