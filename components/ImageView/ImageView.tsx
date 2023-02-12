import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

function ImageView(): JSX.Element {
  // const {generations} = [];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* {generations?.map(image => {
        const key = image.slice(0, 10);
        return (
          <Image
            key={key}
            style={styles.image}
            source={{uri: `data:image/png;base64,${image}`}}
          />
        );
      })} */}
      </View>
    </View>
  );
}

export default ImageView;
