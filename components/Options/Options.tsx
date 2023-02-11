import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

function Options() {
  const [promptString, setPromptString] = React.useState<string>(
    'A majestic horse on a cliffside',
  );
  const [numSteps, setNumSteps] = React.useState<number>(45);

  const handleChangePrompt = (prompt: string) => {
    setPromptString(prompt);
  };
  const handleChangeSteps = (steps: number) => {
    setNumSteps(steps);
  };

  return (
    <View>
      <Text style={styles.sectionTitle}>Options</Text>
      <TextInput
        style={styles.textInput}
        value={promptString}
        onChangeText={text => handleChangePrompt(text)}
      />
      <TextInput
        style={styles.textInput}
        value={numSteps.toString()}
        onChangeText={text => handleChangeSteps(Number(text))}
      />
    </View>
  );
}

export default Options;
