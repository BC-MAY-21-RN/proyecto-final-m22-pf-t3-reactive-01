import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import Styles from './Styles';
import Icon from '../../Icon';
const CustomButton = ({
  title,
  style,
  styleText,
  disabel = false,
  onPress,
  iconName,
  styleIcon,
  directory,
  iconSize = 25,
}) => {
  const TOUCHABLE_STYLES = [Styles.TouchableOpacity];
  const ICON_STYLES = [];
  let IS_ICON;
  if (disabel) {
    TOUCHABLE_STYLES.push(Styles.Disabel);
    onPress = () => {};
  }
  if (iconName) {
    IS_ICON = isIcon(iconName);
    IS_ICON ? ICON_STYLES.push(Styles.Icon) : ICON_STYLES.push(Styles.Image);
  }

  return (
    <TouchableOpacity style={[TOUCHABLE_STYLES, style]} onPress={onPress}>
      {iconName && IS_ICON ? (
        <Icon
          style={[ICON_STYLES, styleIcon]}
          directory={directory}
          name={iconName}
          size={iconSize}
        />
      ) : (
        <Image style={[ICON_STYLES, styleIcon]} source={{uri: iconName}} />
      )}
      <Text style={[Styles.Text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const isIcon = IconName => {
  const ArrayIco = IconName.split('.');
  return ArrayIco[ArrayIco.length - 1] === 'png' ? false : true;
};

export default CustomButton;
