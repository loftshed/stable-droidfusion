import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export default StyleSheet.create({
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
  noImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark.primary,
    borderRadius: 15,
  },
});
