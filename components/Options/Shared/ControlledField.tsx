import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {COLORS, FONTS} from '../../../utils/constants';
import Text from '../../Styled/Text';

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
  textFieldLabel: {
    fontFamily: FONTS.main,
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
      <Text style={styles.textFieldLabel}>{label}</Text>
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
