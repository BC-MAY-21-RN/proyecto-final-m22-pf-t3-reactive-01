import React from 'react';
import {View, Text, Pressable} from 'react-native';
import headerStyles from './headerStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  const {name, navigation, optional, icon, onPress} = props;
  return (
    <View style={headerStyles.container}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={30} color="#E5D96C" />
      </Pressable>
      <Text style={headerStyles.title}>{name}</Text>
      {optional ? (
        <Pressable style={headerStyles.optionalButton} onPress={onPress}>
          <Icon name={icon} size={30} color="#E5D96C" />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Header;
