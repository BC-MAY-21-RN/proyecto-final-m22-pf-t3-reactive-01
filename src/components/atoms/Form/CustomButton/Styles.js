import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  TouchableOpacity: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#E5D96C',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    marginTop: 15,
  },
  Disabel: {
    backgroundColor: 'grey',
  },
  Text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Image: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  Icon: {
    marginRight: 20,
    color: 'black',
  },
});

export default Styles;
