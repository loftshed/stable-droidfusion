import React from 'react';
import {Text as DefaultText, View, StyleSheet} from 'react-native';
import {FONTS} from '../../utils/constants';

const {textStyle} = StyleSheet.create({
  textStyle: {
    fontFamily: FONTS.main,
  },
});

interface TextProps {
  content: string | number;
  style?: object;
}

export default function Text({content, style}: TextProps): JSX.Element {
  return (
    <View>
      <DefaultText style={{...textStyle, ...style}}>{content}</DefaultText>
    </View>
  );
}
