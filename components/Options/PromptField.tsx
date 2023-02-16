import React from 'react';
import {View, StyleSheet} from 'react-native';
import StyledButton from './Shared/StyledButton';
import ControlledField from './Shared/ControlledField';
import {useFormContext} from 'react-hook-form';
import {getImages} from '../../utils/api';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  fieldStyle: {
    flex: 1,
  },
});

interface PromptFieldProps {
  setGenerations: Function;
}

export default function PromptField({
  setGenerations,
}: PromptFieldProps): JSX.Element {
  const {handleSubmit} = useFormContext();

  const onSubmit = async (data: Object) => {
    console.log(data);
    const res = await getImages(data);
    setGenerations(res.images);
  };

  return (
    <View style={styles.container}>
      <ControlledField
        label={'Prompt'}
        name={'prompt'}
        style={styles.fieldStyle}
        valueProps={{
          defaultValue:
            'A wildlife photograph showcasing the beauty and grace of a horse in its natural habitat. Rim lighting in a portrait, with a bright light positioned behind the subject to create a halo effect around the edges.',
        }}
        multiLine
      />
      <StyledButton label={'Generate'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
