import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';

import * as apiUtils from '../utils/api';
import ImageView from './ImageView/ImageView';

import styles from './styles';

function App(): JSX.Element {
  const [generatedImages, setGeneratedImages] = React.useState<string[]>();
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

  const handleButtonPress = async () => {
    const res = await apiUtils.getImages({
      prompt: promptString,
      steps: numSteps,
    });

    setGeneratedImages(res.images);
    // log everything but the images
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.sectionHeader}>Horse Generator 64</Text>
        <ImageView generatedImages={generatedImages} />
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
        <View>
          <Button
            title="Generate"
            color="#001219"
            onPress={handleButtonPress}
            accessibilityLabel="Generate"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
