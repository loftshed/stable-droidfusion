import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

import {COLORS} from '../../utils/constants';
import Carousel from 'react-native-reanimated-carousel';

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
  setSelected: (index: number) => void;
}

export default function CarouselView({
  generations,
}: CarouselViewProps): JSX.Element {
  if (generations.length) {
    return (
      <View style={styles.container}>
        <Carousel
          loop
          data={generations}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({item, index}) => {
            console.log(item);
            const key = `thumb-${index}`;
            return (
              <Image
                key={key}
                source={{uri: `data:image/png;base64,${item}`}}
                style={styles.thumbs}
              />
            );
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>loading...</Text>
    </View>
  );
}
// export default function CarouselView({
//   generations,
// }: CarouselViewProps): JSX.Element {
//   return (
//     <View style={styles.container}>
//       {generations?.map((generation: string, index: number) => {
//         const key = `thumb-${index}`;
//         console.log('key', key);
//         return (
//           <Image
//             key={key}
//             source={{uri: `data:image/png;base64,${generation}`}}
//             style={styles.thumbs}
//           />
//         );
//       })}
//     </View>
//   );
// }
