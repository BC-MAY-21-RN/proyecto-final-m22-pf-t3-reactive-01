import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
const MenuStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.HEADER_COLOR,
    alignItems: 'center',
    height: 150,
    bottom: 5,
  },
  Image: {height: 100, width: 100, borderRadius: 50},
  columna: {flexDirection: 'column', marginLeft: 15},
  otheroptions: {
    borderTopColor: colors.DIVIDER_COLOR,
    borderTopWidth: 0.8,
    borderBottomColor: colors.DIVIDER_COLOR,
    borderBottomWidth: 0.8,
    padding: 8,
  },
  division: {
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: colors.DIVIDER_COLOR,
  },
});

export default MenuStyles;
