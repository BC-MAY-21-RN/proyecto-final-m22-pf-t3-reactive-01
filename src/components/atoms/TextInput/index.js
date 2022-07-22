import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputContainer = props => {
  const {
    styles,
    placeholder,
    secure,
    onChangeText,
    value,
    keyboardType,
    maxLength,
    multiline,
    numberOfLines,
    disabled,
  } = props;
  return (
    <View>
      <TextInput
        style={styles ? styles : defaultS.input}
        placeholder={placeholder}
        placeholderTextColor="#3140C2"
        secureTextEntry={secure}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        value={value}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={!disabled}
        selectTextOnFocus={!disabled}
      />
    </View>
  );
};

export default InputContainer;

const defaultS = StyleSheet.create({
  input: {
    height: 55,
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    fontSize: 20,
  },
});
