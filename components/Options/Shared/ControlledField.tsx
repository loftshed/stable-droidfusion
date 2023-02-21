import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Controller, useFormContext} from 'react-hook-form';
import {COLORS, FONTS} from '../../../utils/constants';
import {Text, TextInput} from '../../Styled';

interface ControlledFieldProps {
  name: string;
  label: string;
  style?: ViewStyle;
  multiLine?: boolean;
  valueProps: {
    defaultValue: string;
  };
}

const styles = StyleSheet.create({
  textField: {
    borderRadius: 10,
    paddingHorizontal: 10,
    color: COLORS.text,
    backgroundColor: COLORS.textField,
    flex: 1,
  },
  textFieldLabel: {
    fontFamily: FONTS.main,
  },
});

/** ControlledField wraps a react-hook-form Controller around a TextInput
 * @param {string} name - The name of the field to the API
 * @param {string} label - A string to display above the field
 * @param {object} style - Optional style object for the View wrapping the TextInput
 * @param {object} valueProps - Props for the value of the field
 * @param {boolean} multiLine - Whether the field should be multiline
 */
export default function ControlledField({
  name,
  label,
  style,
  valueProps,
  multiLine = false,
}: ControlledFieldProps): JSX.Element {
  const fieldStyle = {...styles.textField, ...style};
  const {control} = useFormContext();
  const {defaultValue} = valueProps;

  return (
    <View style={style}>
      <Text content={label} style={styles.textFieldLabel} />
      <Controller
        control={control}
        render={({field: {value, onChange}}) => (
          <TextInput
            style={fieldStyle}
            value={value}
            onChangeText={(text: string) => onChange(text)}
            multiline={multiLine}
          />
        )}
        name={name}
        defaultValue={defaultValue}
      />
    </View>
  );
}
