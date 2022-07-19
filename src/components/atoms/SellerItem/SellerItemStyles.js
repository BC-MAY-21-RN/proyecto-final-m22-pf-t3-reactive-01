import {StyleSheet} from 'react-native';

const SellerItemStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    maxWidth: 400,
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
  modalStyle: {
    marginTop: '80%',
    width: 300,
    margin: 20,
    height: 150,
    alignSelf: 'center',
    backgroundColor: '#4C5BF7',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerModal: {
    marginBottom: 10,
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  contentModal: {
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SellerItemStyles;
