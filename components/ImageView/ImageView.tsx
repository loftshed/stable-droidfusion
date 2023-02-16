import * as React from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {COLORS} from '../../utils/constants';
import {useSharedValue} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import Lightbox from 'react-native-lightbox-v2';

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 15,
  },
  lightbox: {
    alignItems: 'center',
  },
  spacer: {
    flex: 1,
    color: COLORS.bgDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ImageViewProps {
  generations: string[];
  selected: number;
}

function ImageView({generations, selected}: ImageViewProps): JSX.Element {
  const progressValue = useSharedValue<number>(0);
  const imageSize = useWindowDimensions().height * 0.5;
  const noImages = generations.length === 0;
  // const onlyOneImage = generations.length === 1;
  // if only one image is returned show spacers on either side and prevent swiping
  // if generations is empty, show a message

  const handleLongPress = () => {
    console.log('save image');
  };

  return (
    <View style={styles.imageContainer}>
      <Carousel
        width={useWindowDimensions().width}
        height={imageSize}
        loop
        pagingEnabled
        snapEnabled
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 275,
        }}
        data={generations}
        renderItem={({item, index}) => {
          const key = `thumb-${index}`;
          return (
            <Lightbox
              springConfig={{tension: 15, friction: 7}}
              underlayColor="black"
              backgroundColor="black"
              onLongPress={handleLongPress}
              style={styles.lightbox}>
              <Image
                key={key}
                source={{uri: `data:image/png;base64,${item}`}}
                style={{width: imageSize, height: imageSize, borderRadius: 15}}
              />
            </Lightbox>
          );
        }}
      />
    </View>
  );
}

export default ImageView;
