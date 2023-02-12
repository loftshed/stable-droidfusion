import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {COLORS} from '../../../utils/constants';

interface ControlledFieldProps {
  name: string;
  label: string;
  control: Control;
  defaultValue: string;
}

const styles = StyleSheet.create({
  textField: {
    borderRadius: 10,
    paddingHorizontal: 10,
    color: COLORS.text,
    backgroundColor: COLORS.textField,
    flex: 1,
  },
});

export default function ControlledField({
  name,
  label,
  control,
  defaultValue,
}: ControlledFieldProps): JSX.Element {
  return (
    <View>
      <Text>{label}</Text>
      <Controller
        control={control}
        render={({field: {value, onChange}}) => (
          <TextInput
            style={styles.textField}
            onChangeText={text => onChange(text)}
            value={value}
          />
        )}
        name={name}
        defaultValue={defaultValue}
      />
    </View>
  );
}
