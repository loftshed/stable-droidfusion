import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export default StyleSheet.create({
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
    height: 300,
    resizeMode: 'contain',
  },
});
