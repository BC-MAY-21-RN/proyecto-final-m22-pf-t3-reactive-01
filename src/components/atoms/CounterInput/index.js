import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CounterInputStyles from './CounterInputStyles';
import RNBounceable from '@freakycoder/react-native-bounceable';

const Pressable = props => {
  const {text, onPress} = props;
  return (
    <RNBounceable
      style={CounterInputStyles.pressable}
      onPress={onPress}
      bounceFriction={2}
      bounceEffect={1.2}>
      <Text size={20} style={CounterInputStyles.pressableTitle}>
        {text}
      </Text>
    </RNBounceable>
  );
};
const CounterInput = ({onDecrease, onIncrease, quantity}) => {
  return (
    <View style={CounterInputStyles.container}>
      <Pressable text="-" onPress={onDecrease} />
      <Text style={CounterInputStyles.title}>{quantity}</Text>
      <Pressable text="+" onPress={onIncrease} />
    </View>
  );
};

export default CounterInput;
