import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';
import Lightbox from 'react-native-lightbox-v2';

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
  selected: number;
}

function ImageView({generations, selected}: ImageViewProps): JSX.Element {
  const uri = `data:image/png;base64,${generations[selected]}`;

  if (!generations.length) {
    return <View style={styles.imageContainer} />;
  }

  return (
    <Lightbox style={styles.imageContainer}>
      <Image style={styles.image} source={{uri}} />
    </Lightbox>
  );
}

export default ImageView;
