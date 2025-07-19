import React, { FC, memo, useMemo, useRef, useState } from 'react';

import { Portal } from '@gorhom/portal';
import {
  ColorValue,
  LayoutAnimation,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { Colors } from '../constants/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../styles/dimensions';

export type DropdownOption = {
  label: string;
  value: string;
};

export interface DropdownProps {
  selectedValue?: string;
  options: DropdownOption[];
  withOverlay?: boolean;
  overlayColor?: ColorValue;
  containerStyle?: ViewStyle;
  dropdownContainerStyle?: ViewStyle;
  children?: React.ReactNode;
  onValueChange: (option: DropdownOption) => void;
  onRenderOptionItem?: (
    option: DropdownOption,
    closeDropdown: () => void
  ) => React.JSX.Element;
}

type Layout = {
  x: number;
  y: number;
  width: number;
  height: number;
  pageX?: number;
  pageY?: number;
};

const defaultLayout = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

const Dropdown: FC<DropdownProps> = ({
  selectedValue,
  options,
  children,
  withOverlay,
  overlayColor = Colors.OVERLAY_COLOR,
  containerStyle,
  dropdownContainerStyle,
  onValueChange,
  onRenderOptionItem,
}) => {
  const [visible, setVisible] = useState(false);
  const [containerLayout, setContainerLayout] = useState<Layout>(defaultLayout);
  const [optionContainerLayout, setOptionContainerLayout] =
    useState<Layout>(defaultLayout);

  const viewRef = useRef<View>(null);

  const optionLabel = useMemo(
    () => options.find((option) => option.value === selectedValue)?.label,
    [options, selectedValue]
  );

  const renderOptionItem = (item: DropdownOption) => {
    if (onRenderOptionItem) {
      return onRenderOptionItem(item, () => setVisible(false));
    }

    return (
      <Pressable
        key={item.value}
        onPress={() => {
          onValueChange(item);
          setVisible(false);
        }}
        android_disableSound
      >
        <Text>{item.label}</Text>
      </Pressable>
    );
  };

  return (
    <View style={containerStyle}>
      <Pressable
        ref={viewRef}
        onPress={async () => {
          const containerLayoutResult: Layout = await new Promise((resolve) => {
            // eslint-disable-next-line max-params
            viewRef.current?.measure((x, y, width, height, pageX, pageY) => {
              resolve({ x, y, width, height, pageX, pageY });
            });
          });

          if (
            JSON.stringify(containerLayout) !==
            JSON.stringify(containerLayoutResult)
          ) {
            setContainerLayout(containerLayoutResult);
          }

          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setVisible(true);
        }}
      >
        {selectedValue ? <Text>{optionLabel}</Text> : children}
      </Pressable>

      {visible && (
        <Portal>
          <Pressable
            onPress={() => setVisible(false)}
            style={[
              styles.modal,
              {
                backgroundColor: withOverlay ? overlayColor : 'transparent',
              },
            ]}
          >
            <TouchableWithoutFeedback>
              <View
                style={[
                  styles.container,
                  {
                    width: containerLayout.width,
                    left: containerLayout.pageX,
                  },
                  (containerLayout.pageY ?? 0) +
                    containerLayout.height +
                    optionContainerLayout.height >
                  SCREEN_HEIGHT
                    ? {
                        top:
                          (containerLayout.pageY ?? 0) -
                          optionContainerLayout.height,
                      }
                    : {
                        top:
                          (containerLayout.pageY ?? 0) + containerLayout.height,
                      },
                  dropdownContainerStyle,
                ]}
                onLayout={(event: LayoutChangeEvent) => {
                  if (
                    optionContainerLayout.width !==
                      event.nativeEvent.layout.width &&
                    optionContainerLayout.height !==
                      event.nativeEvent.layout.height
                  ) {
                    setOptionContainerLayout(event.nativeEvent.layout);
                  }
                }}
              >
                {options.map(renderOptionItem)}
              </View>
            </TouchableWithoutFeedback>
          </Pressable>
        </Portal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  button: {
    width: SCREEN_WIDTH / 2,
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: Colors.PRIMARY_TEXT,
    borderRadius: 4,
    padding: 10,
  },
});

export default memo(Dropdown);
