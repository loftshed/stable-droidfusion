import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import ControlledField from './Shared/ControlledField';
import ControlledSlider from './Shared/ControlledSlider';
import {getImages} from '../../utils/api';
import PromptField from './PromptField';
import {defaultOptions} from './defaults';

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

  // Collect all options in an array and just map over them

  return (
    <View style={styles.container}>
      <PromptField control={control} handleSubmit={handleSubmit(onSubmit)} />
      <ControlledField
        name={'negative_prompt'}
        label={'Negative Prompt'}
        control={control}
        defaultValue={defaultOptions.general.negativePrompt.def}
      />
      <ControlledField
        name={'seed'}
        label={'Seed'}
        control={control}
        defaultValue={defaultOptions.general.seed.def}
      />
      <ControlledSlider
        label={'Sampling Steps'}
        name={'steps'}
        control={control}
        defaultValue={defaultOptions.general.steps.def}
        maximumValue={defaultOptions.general.steps.max}
      />
      <ControlledSlider
        label={'CFG Scale'}
        name={'cfg_scale'}
        control={control}
        defaultValue={defaultOptions.general.cfgScale.def}
        maximumValue={defaultOptions.general.cfgScale.max}
      />
      <ControlledSlider
        label={'Batch Count'}
        name={'n_iter'}
        control={control}
        defaultValue={defaultOptions.general.batchCount.def}
        maximumValue={defaultOptions.general.batchCount.max}
      />
      <ControlledSlider
        label={'Batch Size'}
        name={'batch_size'}
        control={control}
        defaultValue={defaultOptions.general.batchSize.def}
        maximumValue={defaultOptions.general.batchSize.max}
      />
      <ControlledSlider
        label={'Width'}
        name={'width'}
        control={control}
        defaultValue={defaultOptions.general.width.def}
        maximumValue={defaultOptions.general.width.max}
      />
      <ControlledSlider
        label={'Height'}
        name={'height'}
        control={control}
        defaultValue={defaultOptions.general.height.def}
        maximumValue={defaultOptions.general.height.max}
      />
    </View>
  );
}

export default Options;
