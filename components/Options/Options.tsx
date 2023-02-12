import React from 'react';
import {View, TextInput} from 'react-native';
import SliderInput from './Shared/SliderInput';

import styles from './styles';
import StyledButton from './Shared/StyledButton';
import {COLORS} from '../../utils/constants';

function Options() {
  const [prompt, setPrompt] = React.useState('Enter your prompt here');
  const [width, setWidth] = React.useState(512);
  const [height, setHeight] = React.useState(512);

  const handleChangePrompt = (value: string) => {
    setPrompt(value);
  };

  const handleFocusPrompt = () => {
    if (prompt === 'Enter your prompt here') {
      setPrompt('');
    }
  };

  const handleClear = () => {
    setPrompt('');
  };

  const handleGenerate = async () => {
    // const res = await apiUtils.getImages({prompt, steps});
    // setGenerations(res.images);
    console.log('honk honk');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWithButton}>
        <TextInput
          style={styles.textField}
          value={prompt}
          onChangeText={text => handleChangePrompt(text)}
          onFocus={handleFocusPrompt}
        />
        <StyledButton label={'Generate'} onPress={handleGenerate} />
        <StyledButton
          label={'Clear'}
          color={COLORS.buttonDark}
          onPress={handleClear}
        />
      </View>
      <SliderInput
        label="Sampling Steps"
        defaultValue={40}
        maximumValue={150}
      />
      <SliderInput label="Width" defaultValue={512} maximumValue={1024} />
      <SliderInput label="Height" defaultValue={512} maximumValue={1024} />
    </View>
  );
}

export default Options;
