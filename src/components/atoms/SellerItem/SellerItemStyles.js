import {StyleSheet} from 'react-native';

const SellerItemStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    maxWidth: 500,
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
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  condition: {
    color: 'green',
    fontSize: 12,
    marginTop: 10,
  },
});

export default SellerItemStyles;
