const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

/**
 * A set of colors to use for various parts of the application.
 */
const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
}

/**
 * The set of named colors to use for various parts of the application.
 */
export type ColorName = keyof typeof Colors.light & keyof typeof Colors.dark;

export default Colors;
