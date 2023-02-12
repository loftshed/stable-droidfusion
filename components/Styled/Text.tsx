import React from 'react';
import {Text as DefaultText, StyleSheet} from 'react-native';
import {FONTS} from '../../utils/constants';

const {textStyle} = StyleSheet.create({
  textStyle: {
    fontFamily: FONTS.main,
  },
});
interface TextProps {
  children: React.ReactNode;
  style?: object;
}

export default function Text({children, style}: TextProps): JSX.Element {
  return <DefaultText style={{...textStyle, ...style}}>{children}</DefaultText>;
}
