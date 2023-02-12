import React from 'react';
import {View, StyleSheet} from 'react-native';
import StyledButton from './Shared/StyledButton';
import ControlledField from './Shared/ControlledField';
import {Control} from 'react-hook-form';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  promptInput: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
});

interface PromptFieldProps {
  control: Control;
  handleSubmit: () => void;
}

export default function PromptField({
  control,
  handleSubmit,
}: PromptFieldProps): JSX.Element {
  const handleClear = () => {};
  return (
    <View style={styles.promptInput}>
      <ControlledField
        label={'Prompt'}
        name={'prompt'}
        control={control}
        defaultValue={'A super dope ass horse riding a motorcycle'}
      />

      <StyledButton label={'Generate'} onPress={handleSubmit} />
      <StyledButton
        label={'Clear'}
        color={COLORS.buttonDark}
        onPress={handleClear}
      />
    </View>
  );
}
