import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {ImageViewProps} from './types';

function ImageView({generatedImages}: ImageViewProps): JSX.Element {
  return (
    <View style={styles.container}>
      {generatedImages?.map(image => {
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
