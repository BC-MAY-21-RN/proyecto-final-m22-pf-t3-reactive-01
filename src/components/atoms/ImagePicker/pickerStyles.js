import {StyleSheet} from 'react-native';

const pcikerStyles = StyleSheet.create({
  container: {
    marginTop: 30,
    elevation: 2,
    height: 150,
    width: 290,
    backgroundColor: '#F8F0F0',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  uploadBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#4C5BF7',
    width: '100%',
    height: '25%',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#67679E',
  },
  textContainer: {
    position: 'absolute',
    left: 90,
    top: 25,
    alignItems: 'center',
  },
});

export default pcikerStyles;
