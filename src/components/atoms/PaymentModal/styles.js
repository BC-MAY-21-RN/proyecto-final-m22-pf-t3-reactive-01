import React from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const Styles = StyleSheet.create({
  modalStyle: {
    width: 350,
    margin: 20,
    alignSelf: 'center',
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    padding: 20,
  },
  containerModal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#0000004e',
    height: 800,
  },
  ImageBtn: {
    borderRadius: 10,
    position: 'relative',
    height: 40,
    width: 40,
  },
  header: {
    padding: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  title: {
    fontSize: 20,
    color: colors.HEADER_COLOR,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    top: 10,
  },
  input: {
    padding: 10,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
    elevation: 4,
  },
});

export default Styles;
