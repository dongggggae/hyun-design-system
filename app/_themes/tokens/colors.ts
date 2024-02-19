interface Colors {
  [key: string]: string;
}

const colorScales = {
  // gray
  white: '#ffffff',
  gray100: '#FCFCFC ',
  gray150: '#F5F5F5',
  gray200: '#EFEFEF ',
  gray250: '#E8E8E8',
  gray300: '#DFDFDF',
  gray350: '#C8C8C8',
  gray400: '#B7B7B7',
  gray500: '#949494',
  gray600: '#777777',
  gray650: '#616161',
  gray700: '#555555',
  gray750: '#3F3F3F',
  gray800: '#2A2A2A',
  gray850: '#1F1F1F',
  gray900: '#111111',
  black: '#000000',

  //red
  red400: '#FF96A3',
  red500: '#FF697A',
  red600: '#FF334B',
  red700: '#E5172F',
  red800: '#C9162B',

  //amber
  amber400: '#FFEB94',
  amber500: '#FFD86B',
  amber600: '#FFC53D',
  amber700: '#FCB321',
  amber800: '#FA9E1E',

  //green
  green400: '#6DE67B',
  green500: '#5BDD6A',
  green600: '#06C755',
  green700: '#3D9E43',
  green800: '#1E6E1E',

  // blue
  blue300: '#C2D2FF',
  blue400: '#96B2FF',
  blue500: '#638DFF',
  blue600: '#4D73FF',
  blue700: '#2F59CC',

  // navy
  navy400: '#C8CFDC',
  navy500: '#98A0B3',
  navy600: '#707991',
  navy700: '#464F69',
  navy800: '#323B54',
  navy900: '#202A43',
};

const colors: Colors = {
  ...colorScales,

  primaryText: colorScales.gray900,
  secondaryText: colorScales.gray700,
  tertiaryText: colorScales.gray500,
  surface: colorScales.white,
  green: colorScales.green600,
  red: colorScales.red600,
  link: colorScales.blue600,
  placeholder: colorScales.gray350,
  divider: colorScales.gray200,
  overlay: 'rgba(67, 90, 111, 0.7)',
};
export default colors;
