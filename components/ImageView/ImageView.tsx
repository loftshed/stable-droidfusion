import * as React from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import {COLORS} from '../../utils/constants';
import {useSharedValue} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import Lightbox from 'react-native-lightbox-v2';
import {Text} from '../Styled';

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
    width: '100%',
    height: '100%',
    color: 'orange',
    backgroundColor: COLORS.dark.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ImageViewProps {
  generations: {
    images: string[];
    parameters: any;
    info: any;
  } | null;
  selected: number;
}

/* Put these somewhere else later */
const spacer = <View id="spacer" style={styles.spacer} />;
const emptyView = (
  <View style={styles.image}>
    <Text style={styles.spacer} content={'Nothing to display :('} />
  </View>
);

/* ------------------------------ */

function ImageView({generations, selected}: ImageViewProps): JSX.Element {
  const progressValue = useSharedValue<number>(0);
  const imageSize = useWindowDimensions().height * 0.5;

  const getImages = () => {
    if (!generations) {
      return [emptyView, spacer, spacer];
    }
    const generatedImages = (generations.images || []).map(
      (base64EncodedImage, index) => (
        <Image
          key={`generation-${index || 0}`}
          source={{uri: `data:image/png;base64,${base64EncodedImage}`}}
          style={{...styles.image, width: imageSize, height: imageSize}}
        />
      ),
    );
    return generatedImages.length === 1
      ? [generatedImages[0], spacer, spacer]
      : generatedImages;
  };

  const carouselItems = getImages();
  const enableGestures = carouselItems && carouselItems[1] !== spacer;

  return (
    <View style={styles.imageContainer}>
      <Carousel
        width={useWindowDimensions().width}
        height={imageSize}
        loop
        pagingEnabled
        snapEnabled
        enabled={enableGestures}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 275,
        }}
        data={carouselItems}
        renderItem={({item}) => {
          return (
            <Lightbox
              disabled={!enableGestures}
              springConfig={{tension: 15, friction: 7}}
              underlayColor="black"
              backgroundColor="black"
              onLongPress={() => {
                console.log('add long press to save');
              }}
              style={styles.lightbox}>
              {item}
            </Lightbox>
          );
        }}
      />
    </View>
  );
}

export default React.memo(ImageView);
