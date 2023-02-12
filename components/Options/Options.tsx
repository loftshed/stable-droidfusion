import React from 'react';
import {View, Button, Text, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import SliderInput from './Shared/SliderInput';
import ControlledField from './Shared/ControlledField';
import ControlledSlider from './Shared/ControlledSlider';

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
      <View style={styles.promptInput}>
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

      <ControlledField
        name={'seed'}
        label={'Seed'}
        control={control}
        defaultValue={'-1'}
      />

      <ControlledSlider
        label={'Sampling Steps'}
        name={'steps'}
        control={control}
        defaultValue={40}
        maxiumumValue={150}
      />

      <ControlledSlider
        label={'Width'}
        name={'width'}
        control={control}
        defaultValue={512}
        maxiumumValue={2048}
      />

      <ControlledSlider
        label={'Height'}
        name={'height'}
        control={control}
        defaultValue={512}
        maxiumumValue={2048}
      />
    </View>
  );
}

export default Options;
