import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {COLORS, FONTS} from '../../../utils/constants';
import {Text, TextInput} from '../../Styled';

interface ControlledFieldProps {
  name: string;
  label: string;
  control: Control;
  defaultValue: string;
  style?: ViewStyle;
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

export default function ControlledField({
  name,
  label,
  control,
  defaultValue,
  style,
}: ControlledFieldProps): JSX.Element {
  return (
    <View style={style}>
      <Text style={styles.textFieldLabel}>{label}</Text>
      <Controller
        control={control}
        render={({field: {value, onChange}}) => (
          <TextInput
            style={styles.textField}
            value={value}
            onChangeText={(text: string) => onChange(text)}
          />
        )}
        name={name}
        defaultValue={defaultValue}
      />
    </View>
  );
}
