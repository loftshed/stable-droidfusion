import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import {COLORS} from '../../../utils/constants';

const styles = StyleSheet.create({
  optionHeading: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  optionValue: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    width: 50,
    backgroundColor: COLORS.buttonLight,
    borderRadius: 5,
    padding: 2,
  },
  optionWithValue: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    flex: 1,
  },
});

interface SliderInputProps {
  label: string;
  defaultValue: number;
  maximumValue: number;
}

export default function SliderInput({
  label,
  defaultValue,
  maximumValue,
}: SliderInputProps) {
  const initialValue = defaultValue / maximumValue;
  const [sliderPercentage, setSliderPercentage] = React.useState(initialValue);
  const [recordedValue, setRecordedValue] = React.useState(defaultValue);

  const handleSlider = (value: number, max: number) => {
    setSliderPercentage(value);
    setRecordedValue(Number((value * max).toFixed(0)));
  };

  return (
    <View>
      <Text style={styles.optionHeading}>{label}</Text>
      <View style={styles.optionWithValue}>
        <Slider
          value={sliderPercentage}
          style={styles.slider}
          onValueChange={value => handleSlider(value, maximumValue)}
        />
        <Text style={styles.optionValue}>{recordedValue}</Text>
      </View>
    </View>
  );
}
