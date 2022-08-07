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
  modalStyle: {
    marginTop: '80%',
    width: 300,
    margin: 20,
    height: 150,
    alignSelf: 'center',
    backgroundColor: '#DEE1E4',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#3140C2',
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 50,
  },
  headerModal: {
    marginBottom: 10,
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
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
