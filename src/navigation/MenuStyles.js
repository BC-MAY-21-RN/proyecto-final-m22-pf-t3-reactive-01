import React from 'react';
import {StyleSheet} from 'react-native';

const MenuStyles = StyleSheet.create({
  container: {
    backgroundColor: '#4C5BF7',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    paddingTop: 25,
    height: 120,
    bottom: 5,
  },
  content: {
    padding: 15,
  },
  columna: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 15,
    bottom: 15,
  },
});

export default MenuStyles;
