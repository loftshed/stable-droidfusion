import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Text} from '../Styled';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',

    backgroundColor: COLORS.buttonDark,
    flexDirection: 'row',
    columnGap: 5,
    padding: 10,
    borderRadius: 10,
  },
  thumbs: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

interface CarouselViewProps {
  generations: string[];
}

export default function CarouselView({
  generations,
}: CarouselViewProps): JSX.Element {
  return (
    <View style={styles.container}>
      {generations?.map((generation: string, index: number) => {
        const key = `thumb-${index}`;
        console.log('key', key);
        return (
          <Image
            key={key}
            source={{uri: `data:image/png;base64,${generation}`}}
            style={styles.thumbs}
          />
        );
      })}
    </View>
  );
}
