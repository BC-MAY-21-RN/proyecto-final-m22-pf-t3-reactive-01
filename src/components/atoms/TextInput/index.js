import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputContainer = ({
  styles,
  name,
  placeholder,
  secure,
  onChange,
  onChangeText,
  value,
  keyboardType,
  maxLength,
  multiline,
  numberOfLines,
  disabled,
}) => {
  return (
    <View>
      <TextInput
        name={name}
        style={styles ? styles : defaultS.input}
        placeholder={placeholder}
        placeholderTextColor="#3140C2"
        secureTextEntry={secure}
        onChange={onChange}
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
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
});
