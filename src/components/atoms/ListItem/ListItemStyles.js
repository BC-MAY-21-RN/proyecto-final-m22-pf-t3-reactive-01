import {StyleSheet} from 'react-native';

const ListItemStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    maxWidth: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    padding: 15,
    width: 200,
  },
  button: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  image: {
    height: 150,
    width: 120,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  condition: {
    color: 'green',
    fontSize: 12,
    marginTop: 10,
  },
});

export default ListItemStyles;
