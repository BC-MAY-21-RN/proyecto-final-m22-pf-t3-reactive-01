import React from 'react';
import {View, Text} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Styles from './Styles';

const ItemAddress = props => {
  const {
    name,
    index,
    street,
    state,
    code,
    country,
    phone,
    selected,
    onPress,
    disabled,
  } = props;
  const waitAnimationBounceable = () => setTimeout(onPress, 50);
  return (
    <RNBounceable
      disabled
      style={
        selected === index
          ? [
              Styles.AddressContainer,
              {
                backgroundColor: 'rgba(65,137,230,.15)',
              },
            ]
          : Styles.AddressContainer
      }
      onPress={waitAnimationBounceable}>
      <View style={[Styles.row, {maxWidth: 300}]}>
        <Text>{name}</Text>
        <Text>{street}, </Text>
        <Text>{state}, </Text>
      </View>
      <View style={[Styles.row, {maxWidth: 300}]}>
        <Text>{code}, </Text>
        <Text>{country}, </Text>
        <Text>Phone number: {phone}</Text>
      </View>
    </RNBounceable>
  );
};

export default ItemAddress;
