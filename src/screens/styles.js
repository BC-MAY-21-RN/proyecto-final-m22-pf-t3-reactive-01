import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
export const RegisterStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  row: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  view: {
    padding: 10,
  },
  title: {
    fontSize: 40,
    color: '#ffff',
    backgroundColor: '#1600FF',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
});

export const ProductsStyles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  textarea: {
    height: 150,
    width: 300,
    textAlignVertical: 'top',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
});
