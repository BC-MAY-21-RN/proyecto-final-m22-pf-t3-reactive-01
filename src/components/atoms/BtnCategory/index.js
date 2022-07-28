import React from 'react';
import {Pressable, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import btnStyles from './btnStyles';

const BtnCategory = props => {
  const {selected, category, onPress, name, title, icon2} = props;
  return (
    <View style={btnStyles.btnContainer}>
      <Pressable
        onPress={onPress}
        style={selected === category ? btnStyles.btn2 : btnStyles.btn}>
        {icon2 ? (
          <Icon2
            name={name}
            size={25}
            color={selected === category ? 'white' : 'black'}
          />
        ) : (
          <Icon
            name={name}
            size={25}
            color={selected === category ? 'white' : 'black'}
          />
        )}
      </Pressable>
      <Text>{title}</Text>
    </View>
  );
};

export default BtnCategory;
