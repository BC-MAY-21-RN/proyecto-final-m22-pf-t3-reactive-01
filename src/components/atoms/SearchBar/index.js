import React from 'react';
import {View, TextInput, Pressable, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchStyles from './SearchStyles';

const SearchBar = ({setValue, value}) => {
  return (
    <View style={SearchStyles.searchB}>
      {value ? (
        <View>
          <ActivityIndicator
            size="small"
            color="#0000ff"
            style={SearchStyles.iconSearchStyle}
          />
          <Pressable
            onPress={() => setValue(undefined)}
            style={SearchStyles.cancelIcon}>
            <Icon name="cancel" size={20} color="#000" />
          </Pressable>
        </View>
      ) : (
        <Icon
          name="search"
          size={25}
          color="#000"
          style={SearchStyles.iconSearchStyle}
        />
      )}
      <TextInput
        placeholderTextColor={'gray'}
        placeholder="Search..."
        style={SearchStyles.textInputStyle}
        value={value}
        onChangeText={text => setValue(text)}
      />
    </View>
  );
};
export default SearchBar;
