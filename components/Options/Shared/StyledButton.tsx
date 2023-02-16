import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/constants';
import Text from '../../Styled/Text';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
interface StyledButtonProps {
  label: string;
  color?: string;
  onPress: () => void;
}

/** StyledButton is a button with a default style
 * @param {string} label - The text to display on the button
 * @param {string} color - The background color of the button
 * @param {function} onPress - The function to call when the button is pressed
 */
function StyledButton({label, color, onPress}: StyledButtonProps): JSX.Element {
  const buttonStyle = {
    ...styles.button,
    backgroundColor: color || COLORS.buttonLight,
  };
  return (
    <View>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default StyledButton;
