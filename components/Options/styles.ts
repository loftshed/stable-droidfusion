import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export default StyleSheet.create({
  container: {
    padding: 10,
    minWidth: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  textField: {
    borderRadius: 10,
    paddingHorizontal: 10,
    color: COLORS.text,
    backgroundColor: COLORS.textField,
    flex: 1,
  },
  promptInput: {
    flexDirection: 'row',
    gap: 10,
  },
  smallInput: {
    width: 50,
  },
});
