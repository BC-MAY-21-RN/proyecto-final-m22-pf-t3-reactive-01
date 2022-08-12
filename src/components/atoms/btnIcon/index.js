import React from 'react';
import {StyleSheet} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Icon from '../Icon';
const Style = StyleSheet.create({
  container: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 7,
    width: 35,
    marginLeft: 'auto',
    height: 35,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const BtnIcon = ({
  onPress,
  style,
  style2,
  directory,
  iconName,
  size,
  styleIcon,
}) => {
  const waitAnimationBounceable = () => setTimeout(onPress, 50);
  return (
    <RNBounceable
      style={style2 ? style2 : [Style.container, style]}
      onPress={waitAnimationBounceable}
      bounceFriction={2}
      bounceEffect={1.2}>
      <Icon
        directory={directory}
        name={iconName}
        size={size}
        style={styleIcon}
      />
    </RNBounceable>
  );
};

export default BtnIcon;
