import React from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import ControlledField from './Shared/ControlledField';
import ControlledSlider from './Shared/ControlledSlider';

import styles from './styles';
import StyledButton from './Shared/StyledButton';
import {COLORS} from '../../utils/constants';

import {getImages} from '../../utils/api';
import PromptField from './PromptField';

interface OptionsProps {
  setGenerations: Function;
}

function Options({setGenerations}: OptionsProps) {
  const form = useForm();
  const {control, handleSubmit} = form;

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
      <PromptField control={control} handleSubmit={handleSubmit(onSubmit)} />

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
