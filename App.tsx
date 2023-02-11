import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TextInput,
} from 'react-native';

import { getImages } from './utils';

const getImages = async (payload: Payload, options: Options) => {
  const { ip, port } = options;
  try {
    const response = await fetch(`http://${ip}:${port}/sdapi/v1/txt2img`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json.images;
  } catch (error) {
    console.error(error);
  }
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // This state variable will be an array of strings
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
    const res = await getImages(
      {
        prompt: promptString,
        steps: numSteps,
      },
      {
        ip: '192.168.50.39',
        port: 7860,
      },
    );
    setGeneratedImages(res);
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.sectionHeader}>Horse Generator 64</Text>
        <View style={styles.imageContainer}>
          {generatedImages &&
            generatedImages.map(image => {
              const key = image.slice(0, 10);
              return (
                <Image
                  key={key}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    width: '100%',
                    height: 300,
                    resizeMode: 'contain',
                  }}
                  source={{ uri: `data:image/png;base64,${image}` }}
                />
              );
            })}
        </View>
        <View>
          <Text style={styles.sectionTitle}>Options</Text>
          <TextInput
            placeholder="Enter your prompt"
            value={promptString}
            onChangeText={text => handleChangePrompt(text)}
          />
          <TextInput
            value={numSteps.toString()}
            onChangeText={text => handleChangeSteps(Number(text))}
          />
        </View>
        <View>
          <Button
            title="Generate"
            color="#001219"
            onPress={handleButtonPress}
            accessibilityLabel="Get horse"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    width: '100%',
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    fontSize: 32,
    fontWeight: '600',
    color: 'hotpink',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
