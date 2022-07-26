import {StyleSheet} from 'react-native';

const SearchStyles = StyleSheet.create({
  searchB: {
    width: '80%',
    height: 30,
  },
  textInputStyle: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    color: '#000',
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    position: 'relative',
    paddingLeft: 40,
  },
  iconSearchStyle: {
    position: 'absolute',
    zIndex: 20,
    left: 15,
  },
  activity: {
    position: 'absolute',
    right: 15,
    top: 5,
  },
});

export default SearchStyles;
