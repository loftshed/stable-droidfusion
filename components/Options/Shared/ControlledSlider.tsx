import React from 'react';
import {View, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import Text from '../../Styled/Text';
import {COLORS} from '../../../utils/constants';
import {Controller, useFormContext} from 'react-hook-form';

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
  valueProps: {
    defaultValue: number;
    maximumValue: number;
  };
}

/** ControlledSlider wraps a react-hook-form Controller around a Slider
 * @param {string} name - The name of the field to the API
 * @param {string} label - A string to display above the field
 * @param {object} valueProps - Default value and maximum value for the slider
 */
export default function ControlledSlider({
  name,
  label,
  valueProps: {defaultValue, maximumValue},
}: ControlledSliderProps): JSX.Element {
  const [sliderValue, setSliderValue] = React.useState(defaultValue);
  const handleSlider = (onChange: (value: number) => void, value: number) => {
    setSliderValue(value);
    onChange(value);
  };
  const {control} = useFormContext();

  return (
    <View>
      <Text content={label} />
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
        <Text content={sliderValue} style={styles.optionValue} />
      </View>
    </View>
  );
}
