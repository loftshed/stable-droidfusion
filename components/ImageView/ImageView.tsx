import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: COLORS.textField,
    height: 500,
    width: 500,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 15,
  },
});

interface ImageViewProps {
  generations: string[];
}

function ImageView({generations}: ImageViewProps): JSX.Element {
  return (
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
  );
}

export default ImageView;
