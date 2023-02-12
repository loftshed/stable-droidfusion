import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/constants';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.buttonDark,
  },
});

interface StyledButtonProps {
  label: string;
  onPress: () => void;
}

function StyledButton({label, onPress}: StyledButtonProps): JSX.Element {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default StyledButton;
