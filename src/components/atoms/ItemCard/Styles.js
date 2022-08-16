import React from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const Styles = StyleSheet.create({
  AddressContainer: {
    backgroundColor: 'transparent',
    borderColor: colors.BTN_LIGHT_PRIMARY_COLOR,
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    maxWidth: 120,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default Styles;
