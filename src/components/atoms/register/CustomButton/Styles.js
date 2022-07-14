import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  TouchableOpacity: {
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 50,
    alignSelf: 'center',
    width: '90%',
    borderRadius: 10,
    marginTop: 35,
  },
  TouchableOpacity2: {
    justifyContent: 'center',
    backgroundColor: '#FFF443',
    height: 50,
    alignSelf: 'center',
    width: '90%',
    marginTop: 35,
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 50,
  },
});

export default Styles;
