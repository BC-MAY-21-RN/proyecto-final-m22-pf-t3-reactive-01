import React from 'react';
import {View, Text, Pressable as RnPressable} from 'react-native';
import Styles from './headerStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  const {name, navigation, icon, onPress, BackBtn} = props;
  return (
    <View style={Styles.container}>
      {BackBtn ? (
        <Pressable onPress={() => navigation.goBack()} name="arrow-back" />
      ) : (
        <Pressable onPress={() => navigation.openDrawer()} name="menu" />
      )}
      <Text style={Styles.title}>{name}</Text>
      <Pressable style={Styles.optionalButton} onPress={onPress} name={icon} />
    </View>
  );
};
const Pressable = props => {
  const {style, name, onPress} = props;
  if (!name) {
    return null;
  }
  return (
    <RnPressable style={style} onPress={onPress}>
      <Icon name={name} size={30} color="#E5D96C" />
    </RnPressable>
  );
};

export default Header;
