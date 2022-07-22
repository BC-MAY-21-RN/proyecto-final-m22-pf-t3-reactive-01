import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = props => {
  const {name, size, color, onPress, style} = props;
  return (
    <Pressable onPress={onPress} style={style}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
