import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  error: {
    color: 'red',
    fontSize: 13,
    paddingBottom: 1,
    marginHorizontal: 6,
  },
  iconerror: {
    marginTop: 2,
    color: 'red',
    marginLeft: 10,
  },
  Containerow: {
    flexDirection: 'row',
  },
  Container: {
    paddingBottom: 10,
  },
});

export const AwesomeStyles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    borderRadius: 10,
    borderBottomColor: '#1600FF',
    borderBottomWidth: 1,
    borderWidth: 1,
  },
  title: {
    color: '#1600FF',
    backgroundColor: 'white',
  },
  inputContainer: {
    padding: 0,
  },
});
