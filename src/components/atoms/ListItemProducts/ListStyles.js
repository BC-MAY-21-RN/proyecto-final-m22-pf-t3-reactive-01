import {StyleSheet} from 'react-native';

const ListStyles = StyleSheet.create({
  container: {
    maxWidth: 160,
  marginTop:20,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    elevation: 3,
    marginEnd:28
  },
  
  containerLoad:{
    maxWidth: 160,
    marginTop:20,
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: '#E4E4E4',
      elevation: 2,
      marginEnd:28
  },
  content: {
    paddingTop: 0,
    width: 150,
  
  },
  button: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
  image: {
    height: 130,
    width: 150,
   borderRadius:10
  },
  title: {
    marginTop:5,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft:15,
  },
  description: {
    color: 'black',
    paddingLeft:15,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft:15,
  },
  condition: {
    color: 'green',
    fontSize: 12,
    marginTop: 0,
    marginBottom: 10,
    paddingLeft:15,
  },
});

export default ListStyles;
