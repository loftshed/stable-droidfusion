import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';
import ControlledField from './Shared/ControlledField';
import ControlledSlider from './Shared/ControlledSlider';
import {getImages, getModelList, getSamplerList} from '../../utils/api';
import PromptField from './PromptField';
import {defaultOptions} from './defaults';
import ConfigPicker from './Shared/ConfigPicker';

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
  const {handleSubmit} = useForm();

  const onSubmit = async (data: Object) => {
    const res = await getImages(data);
    setGenerations(res.images);
  };

  // Collect all options in an array and just map over them

  return (
    <View style={styles.container}>
      <ConfigPicker
        label={'Checkpoint'}
        reqKey={'sd_model_checkpoint'}
        endpoint={getModelList}
      />
      <ConfigPicker
        label={'Sampler'}
        reqKey={'sampler_name'}
        endpoint={getSamplerList}
        isForm
      />
      <PromptField handleSubmit={handleSubmit(onSubmit)} />
      <ControlledField
        name={'negative_prompt'}
        label={'Negative Prompt'}
        valueProps={defaultOptions.general.negativePrompt}
      />
      <ControlledField
        name={'seed'}
        label={'Seed'}
        valueProps={defaultOptions.general.seed}
      />
      <ControlledSlider
        label={'Sampling Steps'}
        name={'steps'}
        valueProps={defaultOptions.general.steps}
      />
      <ControlledSlider
        label={'CFG Scale'}
        name={'cfg_scale'}
        valueProps={defaultOptions.general.cfgScale}
      />
      <ControlledSlider
        label={'Batch Count'}
        name={'n_iter'}
        valueProps={defaultOptions.general.batchCount}
      />
      <ControlledSlider
        label={'Batch Size'}
        name={'batch_size'}
        valueProps={defaultOptions.general.batchSize}
      />
      <ControlledSlider
        label={'Width'}
        name={'width'}
        valueProps={defaultOptions.general.width}
      />
      <ControlledSlider
        label={'Height'}
        name={'height'}
        valueProps={defaultOptions.general.height}
      />
    </View>
  );
}

export default Options;
