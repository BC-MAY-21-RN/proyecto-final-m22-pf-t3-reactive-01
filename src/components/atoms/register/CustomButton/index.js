import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import Styles from './Styles';

const CustomButton = ({
  title,
  style,
  styleText,
  disabel = false,
  onPress,
  google,
}) => {
  const TOUCHABLE_STYLES = [Styles.TouchableOpacity];
  const TEXT_STYLES = [Styles.text];
  if (disabel) {
    TOUCHABLE_STYLES.push(Styles.Disabel);
    onPress = () => {};
  }
  style ? TOUCHABLE_STYLES.push(style) : null;
  styleText ? TEXT_STYLES.push(styleText) : null;
  return (
    <TouchableOpacity style={TOUCHABLE_STYLES} onPress={onPress}>
      {google ? (
        <Image
          style={Styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png',
          }}
        />
      ) : null}
      <Text style={TEXT_STYLES}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
