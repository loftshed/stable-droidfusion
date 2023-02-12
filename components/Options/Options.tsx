import React from 'react';
import {View, TextInput} from 'react-native';
import SliderInput from './Shared/SliderInput';

import styles from './styles';
import StyledButton from './Shared/StyledButton';

function Options() {
  const [prompt, setPrompt] = React.useState('Enter your prompt here');
  const [steps, setSteps] = React.useState(0);

  const handleChangePrompt = (value: string) => {
    setPrompt(value);
  };
  const handleButtonPress = async () => {
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
          onFocus={() => setPrompt('')}
        />
        <StyledButton label={'Generate'} onPress={handleButtonPress} />
      </View>
      <SliderInput
        label="Steps"
        currentValue={steps}
        maximumValue={150}
        setValue={setSteps}
      />
    </View>
  );
}

export default Options;
