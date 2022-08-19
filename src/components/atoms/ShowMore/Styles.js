import React from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const Styles = StyleSheet.create({
  title2: {
    fontSize: 20,
    color: '#36A655',
    fontWeight: 'bold',
  },
  ShowMore: {
    margin: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.DIVIDER_COLOR,
    borderRadius: 10,
    padding: 10,
  },
});

export default Styles;
