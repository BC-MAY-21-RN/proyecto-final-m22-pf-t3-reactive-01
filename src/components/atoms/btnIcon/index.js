import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNBounceable from '@freakycoder/react-native-bounceable';

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

const BtnIcon = ({onPress, styles, ...props}) => {
  let CONTAINER_STYLES = [Style.container];
  if (styles) {
    CONTAINER_STYLES.push(styles);
  }
  const waitAnimationBounceable = () => setTimeout(onPress, 50);

  return (
    <RNBounceable
      style={CONTAINER_STYLES}
      onPress={waitAnimationBounceable}
      bounceFriction={2}
      bounceEffect={1.2}>
      <Icon {...props} />
    </RNBounceable>
  );
};

export default BtnIcon;
