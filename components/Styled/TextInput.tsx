import React from 'react';
import {
  TextInput as DefaultTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import {FONTS} from '../../utils/constants';

const {textInputStyle} = StyleSheet.create({
  textInputStyle: {
    fontFamily: FONTS.main,
  },
});

export default function TextInput(props: TextInputProps): JSX.Element {
  const style = {...Object(props.style), ...textInputStyle};
  return <DefaultTextInput {...props} style={style} />;
}
