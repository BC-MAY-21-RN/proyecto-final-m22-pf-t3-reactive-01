import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.HEADER_COLOR,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.TXT_SECONDARY_COLOR,
    left: 15,
  },
  optionalButton: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
});

export default headerStyles;
