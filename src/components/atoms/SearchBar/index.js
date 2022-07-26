import React from 'react';
import {View, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchStyles from './SearchStyles';

const SearchBar = ({setValue, value}) => {
  return (
    <View style={SearchStyles.searchB}>
      <Icon
        name="search"
        size={25}
        color="#000"
        style={SearchStyles.iconSearchStyle}
      />
      <TextInput
        placeholderTextColor={'gray'}
        placeholder="Search..."
        style={SearchStyles.textInputStyle}
        value={value}
        onChangeText={text => setValue(text)}
      />
      {value ? (
        <ActivityIndicator
          size="small"
          color="#0000ff"
          style={SearchStyles.activity}
        />
      ) : null}
    </View>
  );
};
export default SearchBar;
