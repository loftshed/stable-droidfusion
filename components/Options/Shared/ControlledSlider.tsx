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

interface SliderInputProps {
  label: string;
  maximumValue: number;
  onChange: (x: any) => void;
  x: any;
}

function SliderInput({x, label, maximumValue, onChange}: SliderInputProps) {
  const initialValue = x / maximumValue;
  const [sliderPercentage, setSliderPercentage] = React.useState(initialValue);
  const [recordedValue, setRecordedValue] = React.useState(x);

  const handleSlider = (value: number, max: number) => {
    setSliderPercentage(value);
    setRecordedValue(Number((value * max).toFixed(0)));
    onChange({x: Number((value * max).toFixed(0))});
  };

  return (
    <View>
      <Text>{label}</Text>
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

interface ControlledSliderProps {
  label: string;
  name: string;
  control: Control;
  defaultValue: number;
  maxiumumValue: number;
}

export default function ControlledSlider({
  name,
  control,
  label,
  defaultValue,
  maxiumumValue,
}: ControlledSliderProps): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({field: {value, onChange}}) => (
        <SliderInput
          label={label}
          maximumValue={maxiumumValue}
          onChange={({x}) => onChange(x)}
          x={value}
        />
      )}
    />
  );
}
