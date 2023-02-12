import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: COLORS.textField,
    height: 500,
    width: 500,
    borderRadius: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

interface ImageViewProps {
  generations: string[];
}

function ImageView({generations}: ImageViewProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {generations?.map(image => {
          const key = image.slice(0, 10);
          return (
            <Image
              key={key}
              style={styles.image}
              source={{uri: `data:image/png;base64,${image}`}}
            />
          );
        })}
      </View>
    </View>
  );
}

export default ImageView;
