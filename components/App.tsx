/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import ImageView from './ImageView/ImageView';
import Options from './Options/Options';
import {COLORS} from '../utils/constants';
import {useForm, FormProvider} from 'react-hook-form';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ConfigPicker from './Options/Shared/ConfigPicker';
import {getModelList} from '../utils/api';

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.dark.bg,
    minHeight: '100%',
    padding: 10,
  },
  sectionHeader: {
    fontSize: 42,
    fontWeight: '600',
    color: 'hotpink',
    textAlign: 'center',
    height: 50,
    borderBottomLeftRadius: 10,
  },
});

function App(): JSX.Element {
  const [generations, setGenerations] = React.useState(null);
  const [selected, setSelected] = React.useState(0);
  const methods = useForm();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <FormProvider {...methods}>
        <SafeAreaView style={styles.main}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <ConfigPicker
              label={'Checkpoint'}
              reqKey={'sd_model_checkpoint'}
              endpoint={getModelList}
            />
            <ImageView generations={generations} selected={selected} />
            <Options setGenerations={setGenerations} />
          </ScrollView>
        </SafeAreaView>
      </FormProvider>
    </GestureHandlerRootView>
  );
}

export default App;
