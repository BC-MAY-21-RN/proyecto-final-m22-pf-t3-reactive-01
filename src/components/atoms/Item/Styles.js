import React from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const Styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 7,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.DIVIDER_COLOR,
    justifyContent: 'space-around',
  },
  image: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 18,
    maxWidth: 100,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    top: 30,
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 5,
  },
  ImageBtn: {
    borderColor: 'transparent',
    borderRadius: 20,
    marginRight: 5,
    borderWidth: 2,
    width: 45,
    height: 45,
  },
});

export default Styles;
