import React from 'react';
import {Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import butonStyles from './butonStyles';

const MenuButtom = props => {
  const {text, onPress, name} = props;
  return (
    <Pressable style={butonStyles.container} onPress={onPress}>
      <Icon name={name} size={20} color="#4C5BF7" />
      <Text style={butonStyles.title}>{text}</Text>
    </Pressable>
  );
};

export default MenuButtom;
