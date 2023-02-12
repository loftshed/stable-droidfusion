import React from 'react';
import {Text as DefaultText} from 'react-native';
import {FONTS} from '../../utils/constants';

interface TextProps {
  children: React.ReactNode;
  style?: object;
}

export default function Text({children, style}: TextProps) {
  return (
    <DefaultText style={{fontFamily: FONTS.main, ...style}}>
      {children}
    </DefaultText>
  );
}
