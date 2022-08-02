import React from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Style from './Style.js';
import ErrorMessage from '../ErrorMessage/index';
const Checkbox = ({value, title, error, onChangeText, disabled}) => {
  return (
    <>
      <View style={Style.Container}>
        <CheckBox
          disabled={disabled}
          value={value}
          onValueChange={onChangeText}
          tintColors={{true: '#198754', false: 'grey'}}
        />
        <Text style={Style.Label}>{title}</Text>
      </View>
      {error && <ErrorMessage errorMsg={error} iconName="exclamation-circle" />}
    </>
  );
};

export default Checkbox;
