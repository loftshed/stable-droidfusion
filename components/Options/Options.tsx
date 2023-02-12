import React from 'react';
import {View, Button, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import SliderInput from './Shared/SliderInput';
import Slider from '@react-native-community/slider';

import styles from './styles';
import StyledButton from './Shared/StyledButton';
import {COLORS} from '../../utils/constants';

import {getImages} from '../../utils/api';

interface OptionsProps {
  setGenerations: Function;
}

function Options({setGenerations}: OptionsProps) {
  const {control, handleSubmit} = useForm();

  const handleGenerate = async data => {
    const res = await getImages(data);
    setGenerations(res.images);
  };

  const onSubmit = (data: Object) => {
    console.log(data);
    handleGenerate(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWithButton}>
        <Controller
          control={control}
          render={({field: {value, onChange}}) => (
            <TextInput
              style={styles.textField}
              onChangeText={text => onChange(text)}
              value={value}
            />
          )}
          name="prompt"
          defaultValue="A super dope ass horse riding a motorcycle"
        />
        <StyledButton label={'Generate'} onPress={handleSubmit(onSubmit)} />
        {/* <StyledButton
          label={'Clear'}
          color={COLORS.buttonDark}
          onPress={handleClear}
        /> */}
      </View>

      <Controller
        control={control}
        name="steps"
        defaultValue={40}
        render={({field: {value, onChange}}) => (
          <SliderInput
            label={'Sampling Steps'}
            maximumValue={150}
            onChange={({x}) => onChange(x)}
            x={value}
          />
        )}
      />
      <Controller
        control={control}
        name="width"
        defaultValue={512}
        render={({field: {value, onChange}}) => (
          <SliderInput
            label={'Width'}
            maximumValue={2048}
            onChange={({x}) => onChange(x)}
            x={value}
          />
        )}
      />

      <Controller
        control={control}
        name="length"
        defaultValue={512}
        render={({field: {value, onChange}}) => (
          <SliderInput
            label={'Length'}
            maximumValue={2048}
            onChange={({x}) => onChange(x)}
            x={value}
          />
        )}
      />
    </View>
  );
}

export default Options;
