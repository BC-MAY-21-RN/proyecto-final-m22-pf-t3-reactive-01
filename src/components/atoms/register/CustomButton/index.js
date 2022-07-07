import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import Styles from './Styles';

const CustomButton = props => {
  const {title, disabel = false, onPress, google} = props;
  return (
    <TouchableOpacity
      style={disabel ? Styles.TouchableOpacity : Styles.TouchableOpacity2}
      onPress={disabel ? null : onPress}>
      {google ? (
        <Image
          style={Styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png',
          }}
        />
      ) : null}
      <Text style={Styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
