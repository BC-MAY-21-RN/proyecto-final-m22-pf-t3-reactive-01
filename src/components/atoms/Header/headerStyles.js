import React from 'react';
import {StyleSheet} from 'react-native';

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#3140C2',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    left: 15,
  },
  optionalButton: {
    position: 'absolute',
    right: 15,
    top: 20,
  },
});

export default headerStyles;
