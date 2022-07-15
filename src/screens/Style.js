import {Dimensions, StyleSheet} from 'react-native';
import colors from '../constants/colors';

export const RegisterStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  row: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  view: {
    padding: 10,
  },
  title: {
    fontSize: 40,
    color: '#ffff',
    backgroundColor: '#1600FF',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
});

export const CarritoStyle = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
  },
  containerColumn: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 145,
  },
  name: {
    color: 'black',
  },
  item: {
    flexDirection: 'row',
    margin: 10,
  },
  price: {
    color: 'green',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  imageRef: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  Separator: {
    height: 2,
    marginHorizontal: 10,
    backgroundColor: '#BEBEBE',
  },
});
