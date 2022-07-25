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
  headerIconEmbellishment: {
    position: 'absolute',
    backgroundColor: '#f04037',
    borderRadius: 10,
    width: 15,
    height: 15,
    top: -6,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  embellishmentText: {
    color: colors.TXT_SECONDARY_COLOR,
    fontSize: 12,
    bottom: 1,
    fontWeight: 'bold',
  },
});

export default headerStyles;
