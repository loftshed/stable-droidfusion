import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import ControlledField from './Shared/ControlledField';
import ControlledSlider from './Shared/ControlledSlider';
import {getImages} from '../../utils/api';
import PromptField from './PromptField';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    rowGap: 5,
  },
});

interface OptionsProps {
  setGenerations: Function;
}

function Options({setGenerations}: OptionsProps) {
  const form = useForm();
  const {control, handleSubmit} = form;

  const onSubmit = async (data: Object) => {
    console.log(data);
    const res = await getImages(data);
    setGenerations(res.images);
  };

  return (
    <View style={styles.container}>
      <PromptField control={control} handleSubmit={handleSubmit(onSubmit)} />
      <ControlledField
        name={'negative_prompt'}
        label={'Negative Prompt'}
        control={control}
        defaultValue={''}
      />
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
        maximumValue={150}
      />
      <ControlledSlider
        label={'CFG Scale'}
        name={'cfg_scale'}
        control={control}
        defaultValue={7}
        maximumValue={15}
      />
      <ControlledSlider
        label={'Batch Count'}
        name={'n_iter'}
        control={control}
        defaultValue={1}
        maximumValue={8}
      />
      <ControlledSlider
        label={'Batch Size'}
        name={'batch_size'}
        control={control}
        defaultValue={1}
        maximumValue={100}
      />
      <ControlledSlider
        label={'Width'}
        name={'width'}
        control={control}
        defaultValue={512}
        maximumValue={2048}
      />
      <ControlledSlider
        label={'Height'}
        name={'height'}
        control={control}
        defaultValue={512}
        maximumValue={2048}
      />
    </View>
  );
}

export default Options;
