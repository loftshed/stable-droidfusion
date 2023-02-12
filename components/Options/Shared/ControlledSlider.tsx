import React from 'react';
import {View, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import Text from '../../Styled/Text';
import {COLORS} from '../../../utils/constants';
import {Control, Controller} from 'react-hook-form';

const styles = StyleSheet.create({
  optionValue: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    width: 50,
    backgroundColor: COLORS.buttonLight,
    borderRadius: 5,
    padding: 5,
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

interface ControlledSliderProps {
  label: string;
  name: string;
  control: Control;
  defaultValue: number;
  maximumValue: number;
}

export default function ControlledSlider({
  name,
  control,
  label,
  defaultValue,
  maximumValue,
}: ControlledSliderProps): JSX.Element {
  const [sliderValue, setSliderValue] = React.useState(defaultValue);
  const handleSlider = (onChange: (value: number) => void, value: number) => {
    setSliderValue(value);
    onChange(value);
  };

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.optionWithValue}>
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          render={({field: {value, onChange}}) => (
            <Slider
              step={1}
              lowerLimit={1}
              minimumValue={1}
              upperLimit={maximumValue}
              maximumValue={maximumValue}
              value={value}
              onValueChange={val => handleSlider(onChange, val)}
              style={styles.slider}
            />
          )}
        />
        <Text style={styles.optionValue}>{sliderValue}</Text>
      </View>
    </View>
  );
}
