import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import StyledButton from './Shared/StyledButton';

const styles = StyleSheet.create({
  inputWithButton: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default function PromptField() {
  return (
    <View style={styles.inputWithButton}>
      <TextInput
        style={styles.textField}
        value={prompt}
        onChangeText={text => handleChangePrompt(text)}
        onFocus={handleFocusPrompt}
      />
      <StyledButton label={'Generate'} onPress={handleGenerate} />
      <StyledButton
        label={'Clear'}
        color={COLORS.buttonDark}
        onPress={handleClear}
      />
    </View>
  );
}
