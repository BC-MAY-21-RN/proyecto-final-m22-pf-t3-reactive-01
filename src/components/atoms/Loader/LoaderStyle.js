import {StyleSheet} from 'react-native';

const LoaderStyle = StyleSheet.create({
  container: {backgroundColor: '#0000099e', height: 800},
  background: {
    backgroundColor: '#F4F4F4',
    position: 'absolute',
    top: 240,
    left: 90,
    borderRadius: 10,
    padding: 40,
    paddingBottom:20,
    elevation:3
  },
  iconReload: {
    marginTop:18,
    elevation:3,
    
    width:25,
    height:25,
    backgroundColor:'#3140C2',
    borderRadius:40,
    elevation:3
    
  },
  backgroundActivityIndicator: {
    backgroundColor: '#F4F4F4',
    borderRadius: 100,
    width:110,
    height:110,
    elevation:3
   
  
  },

  message: {
    color: '#3140C2',
    textAlign: 'center',
    fontSize: 20,
marginTop:20,
    textTransform: 'capitalize',
    letterSpacing: 2,
  },
});

export default LoaderStyle;
