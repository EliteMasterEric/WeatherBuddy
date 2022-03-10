/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors, { ColorName } from '../constants/Colors';
import { useAppColorScheme } from '../state/Hooks';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

/**
 * Allows for the user of different color schemes based on the current theme.
 * Theme is determined by the useColorScheme hook, which returns either 'light' or 'dark'
 * based on the user's settings (in their browser or in their phone).
 * 
 * @param props Optionally override the default colors for the light and dark modes.
 * @param colorName The type of color to use.
 *   Examples include 'text', 'background', 'tint', etc.
 * @returns The color to use for the given colorName
 */
export const useThemeColor = function(
  props: ThemeProps,
  colorName: ColorName,
) {
  const theme = useAppColorScheme() || 'dark';
  const colorFromProps = props[`${theme}Color`];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export type TextProps = ThemeProps & DefaultText['props'];

/**
 * A React Native `Text` component with additional options for themes.
 */
export const Text = function({ style, lightColor, darkColor, ...otherProps }: TextProps) {
  const color = useThemeColor({ lightColor, darkColor }, 'text');
  
  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export const MonoText = function(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export type ViewProps = ThemeProps & DefaultView['props'];

/**
 * A React Native `View` component with additional options for themes.
 */
 export const View = function({ style, lightColor, darkColor, ...otherProps }: ViewProps) {
  const backgroundColor = useThemeColor({ lightColor, darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
