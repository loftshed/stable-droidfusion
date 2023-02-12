import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

import {COLORS} from '../../utils/constants';
import Carousel from 'react-native-reanimated-carousel';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
    backgroundColor: COLORS.buttonDark,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 5,
    padding: 10,
    borderRadius: 10,
  },
  carousel: {
    width: '100%',
    justifyContent: 'center',
  },
  thumbs: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

interface CarouselViewProps {
  generations: string[];
  setSelected: (index: number) => void;
}

export default function CarouselView({
  generations,
  setSelected,
}: CarouselViewProps): JSX.Element {
  if (generations.length) {
    return (
      <View style={styles.container}>
        <Carousel
          data={generations}
          style={styles.carousel}
          onSnapToItem={index => console.log('current index:', index)}
          width={160}
          height={150}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 15,
          }}
          renderItem={({item, index}) => {
            const key = `thumb-${index}`;
            return (
              <TouchableOpacity onPress={() => setSelected(index)}>
                <Image
                  key={key}
                  source={{uri: `data:image/png;base64,${item}`}}
                  style={styles.thumbs}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }

  return <View style={styles.container} />;
}
