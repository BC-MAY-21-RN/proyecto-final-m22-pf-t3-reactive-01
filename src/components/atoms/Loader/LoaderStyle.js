import {StyleSheet} from 'react-native';

const LoaderStyle = StyleSheet.create({
  container: {backgroundColor: '#0000099e', height: 800},
  background: {
    backgroundColor: '#F4F4F4',
    position: 'absolute',
    top: 240,
    left: 90,
    borderRadius: 20,
    padding: 40,
    paddingBottom: 20,
    elevation: 3,
  },
  iconReload: {
    marginTop: 18,
    elevation: 5,
    borderLeftWidth: 2,
    borderBottomWidth: 0,
    borderColor: '#0000999e',
    width: 20,
    height: 20,
    backgroundColor: '#F4F4F4',
    borderRadius: 40,

    zIndex: 5,
  },
  backgroundActivityIndicator: {
    backgroundColor: '#F4F4F4',
    borderRadius: 100,
    width: 110,
    height: 110,
    elevation: 3,
  },
  iconReloadCenter: {
    position: 'absolute',
    top: 56,
    left: 65.6,

    zIndex: 2,
    borderRadius: 10,
  },
  iconReloadCenter2: {
    position: 'absolute',
    top: 55,
    left: 65,
    zIndex: 1,
    borderRadius: 10,
  },
  iconReloadCenter3: {
    position: 'absolute',
    top: 55,
    left: 64,
    zIndex: 1,
    borderRadius: 10,
  },
  message: {
    color: '#3140C2',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    textTransform: 'capitalize',
    letterSpacing: 2,
  },
});

export default LoaderStyle;
