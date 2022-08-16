import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import btnStyles from './btnStyles';
import RNBounceable from '@freakycoder/react-native-bounceable';

const BtnCategory = props => {
  const {selected, category, onPress, name, title, icon2} = props;
  const waitAnimationBounceable = () => setTimeout(onPress, 50);
  return (
    <View style={btnStyles.btnContainer}>
      <RNBounceable
        onPress={waitAnimationBounceable}
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
      </RNBounceable>
      <Text>{title}</Text>
    </View>
  );
};

export default BtnCategory;
