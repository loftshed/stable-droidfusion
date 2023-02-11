import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import * as ProgressBar from 'react-native-progress';

function Progress(): JSX.Element {
  const [percent, setPercent] = React.useState<number>(0.1);
  return (
    <View style={styles.container}>
      <ProgressBar.Bar progress={percent} width={null} height={30} />
    </View>
  );
}

export default Progress;
