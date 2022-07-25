import React from 'react';
import {StyleSheet} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
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

const BtnIcon = ({onPress, styles, directory, ...props}) => {
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
      <Icon directory={directory} props={props} />
    </RNBounceable>
  );
};

const Icon = ({directory, props}) => {
  //Props name, size, color
  switch (directory) {
    case 'Ionicons':
      return <IconIon {...props} />;
    case 'EvilIcons':
      return <IconEvilIcons {...props} />;
    case 'FontAwesome5':
      return <IconFontAwesome5 {...props} />;
    default:
      return <IconFontAwesome {...props} />;
  }
};

export default BtnIcon;
