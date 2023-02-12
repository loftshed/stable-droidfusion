import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import InputStyles from '../styles';

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
    minWidth: '10%',
  },
  optionWithValue: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    width: '90%',
  },
});

interface SliderInputProps {
  label: string;
  currentValue: number;
  maximumValue: number;
  setValue: (value: number) => void;
}

export default function SliderInput({
  label,
  currentValue,
  maximumValue,
  setValue,
}: SliderInputProps) {
  const handleSlider = (value: number, max: number, setSliderValue: any) => {
    setSliderValue(Number((value * max).toFixed(0)));
  };

  return (
    <View>
      <Text style={styles.optionHeading}>{label}</Text>
      <View style={styles.optionWithValue}>
        <Slider
          value={currentValue}
          style={styles.slider}
          onValueChange={value => handleSlider(value, maximumValue, setValue)}
        />
        <Text style={styles.optionValue}>{currentValue}</Text>
      </View>
    </View>
  );
}
