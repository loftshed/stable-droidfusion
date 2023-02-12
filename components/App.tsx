import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';

import GenerateButton from './GenerateButton/GenerateButton';
import ImageView from './ImageView/ImageView';
import Options from './Options/Options';
import {COLORS} from '../utils/constants';

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.bgDark,
    minHeight: '100%',
    padding: 10,
  },
  sectionHeader: {
    fontSize: 32,
    fontWeight: '600',
    color: 'hotpink',
    textAlign: 'center',
    height: 50,
    borderBottomLeftRadius: 10,
  },
});

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.sectionHeader}>Horse Generator 64</Text>
        <ImageView />
        <Options />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
