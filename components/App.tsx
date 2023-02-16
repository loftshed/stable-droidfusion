import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import Text from './Styled/Text';

import CarouselView from './CarouselView/CarouselView';
import ImageView from './ImageView/ImageView';
import Options from './Options/Options';
import {COLORS} from '../utils/constants';
import {useForm, FormProvider} from 'react-hook-form';

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.bgDark,
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
  viewOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function App(): JSX.Element {
  const [generations, setGenerations] = React.useState([]);
  const [selected, setSelected] = React.useState(0);
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <SafeAreaView style={styles.main}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={styles.sectionHeader}>Horse Generator 64</Text>
          <View style={styles.viewOptions}>
            <View style={{position: 'relative'}}>
              <ImageView generations={generations} selected={selected} />
              <CarouselView
                style={{position: 'absolute', bottom: 0}}
                generations={generations}
                setSelected={setSelected}
              />
            </View>
            <Options setGenerations={setGenerations} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </FormProvider>
  );
}

export default App;
