import React from 'react';
import {Text, View} from 'react-native';
import Style from './Style.js';
import Icon from '../../Icon';
const ErrorMessage = ({
  errorMsg,
  styleMsg,
  iconName,
  styleIcon,
  directory,
  iconSize,
}) => {
  return (
    <View style={Style.Container}>
      <Icon
        style={[Style.IconError, styleIcon]}
        directory={directory}
        name={iconName}
        size={iconSize}
      />
      <Text style={[Style.Error, styleMsg]}>{errorMsg}</Text>
    </View>
  );
};

export default ErrorMessage;
