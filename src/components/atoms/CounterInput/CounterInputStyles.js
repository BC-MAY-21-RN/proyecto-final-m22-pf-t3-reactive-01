import React from 'react';
import {StyleSheet} from 'react-native';

const CounterInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 6,
    marginTop: 5,
    width: 110,
    height: 45,
    backgroundColor: '#E3E3E7',
    borderRadius: 15,
    justifyContent: 'space-around',
  },
  pressable: {
    width: 30,
    backgroundColor: '#CBCCCC',
    borderRadius: 10,
    alignItems: 'center',
  },
  pressableTitle: {
    color: '#0464AC',
    fontWeight: 'bold',
    fontSize: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 2,
    marginHorizontal: 20,
  },
});

export default CounterInputStyles;
