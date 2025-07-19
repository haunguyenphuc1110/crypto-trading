import React from 'react';
import { ViewStyle } from 'react-native';
import { Colors } from '../constants/colors';

import { icons, IconName } from '../assets/svgs';

interface IconSvgProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const iconMap = icons;

const IconSvg: React.FC<IconSvgProps> = ({
  name,
  size = 14,
  color = Colors.PRIMARY_TEXT,
  style,
}) => {
  const SvgComponent = iconMap[name];

  if (!SvgComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <SvgComponent
      width={size}
      height={size}
      color={color}
      fill={color}
      stroke={color}
      style={style}
    />
  );
};

export type { IconName };
export default IconSvg;
