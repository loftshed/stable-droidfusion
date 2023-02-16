import React from 'react';
import {View, StyleSheet} from 'react-native';
import StyledButton from './Shared/StyledButton';
import ControlledField from './Shared/ControlledField';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  fieldStyle: {
    flex: 1,
  },
});

interface PromptFieldProps {
  handleSubmit: () => void;
}

export default function PromptField({
  handleSubmit,
}: PromptFieldProps): JSX.Element {
  return (
    <View style={styles.container}>
      <ControlledField
        label={'Prompt'}
        name={'prompt'}
        style={styles.fieldStyle}
        valueProps={{defaultValue: 'A super cool horse'}}
        multiLine
      />
      <StyledButton label={'Generate'} onPress={handleSubmit} />
    </View>
  );
}
