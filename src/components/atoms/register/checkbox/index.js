import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Style from './Style.js';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Checkbox = props => {
  const {value, title, error, onChangeText, disabled} = props;
  return (
    <View>
      <View style={Style.checkboxContainer}>
        <CheckBox
          disabled={disabled}
          value={value}
          onValueChange={onChangeText}
          tintColors={{true: '#5974f5', false: 'grey'}}
        />
        <Text style={Style.label}>{title}</Text>
      </View>
      {error ? (
        <View style={Style.Containerow}>
          <Icon style={Style.iconerror} name="exclamation-circle" size={13} />
          <Text style={Style.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Checkbox;
