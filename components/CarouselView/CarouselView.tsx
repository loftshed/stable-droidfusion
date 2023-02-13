import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  carousel: {
    justifyContent: 'center',
    width: '90%',
    backgroundColor: 'rgba(36, 36, 36, 0.7)',
    borderRadius: 10,
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
  style?: object;
}

export default function CarouselView({
  generations,
  setSelected,
  style,
}: CarouselViewProps): JSX.Element | undefined {
  if (generations.length > 1) {
    return (
      <View style={{...style, ...styles.container}}>
        <Carousel
          data={generations}
          style={styles.carousel}
          onSnapToItem={index => console.log('current index:', index)}
          width={75}
          height={75}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: -5,
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
}
