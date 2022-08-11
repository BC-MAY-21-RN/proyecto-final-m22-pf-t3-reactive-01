import {StyleSheet} from 'react-native';

const ImageAccountStyle = StyleSheet.create({
  containerImageAndName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
    padding: 5,
    marginTop: 7,
    borderRadius: 20,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 100,
    elevation: 5,
    zIndex: 5,
    marginLeft: 5,
  },
  iconChangeImage: {
    position: 'absolute',
    top: 18,
    left: 33,
    backgroundColor: '#3140C2',
    paddingLeft: 70,
    paddingRight: 12,
    paddingVertical: 22,
    borderRadius: 100,

    elevation: 9,

    zIndex: 3,
  },
  containerLabels: {
    marginLeft: 20,
    backgroundColor: '#3140C2',
    width: 325,
    paddingStart: 99,
    paddingVertical: 22,
    position: 'absolute',
    left: -14,
    top: 1,
    zIndex: 0,
    elevation: 15,
    borderRadius:100
  },
  labelName: {
    color: '#fff',
    marginLeft: 60,
    fontSize: 25,
    textTransform: 'capitalize',
  },
  labelUserType: {
    color: '#fff',
    marginLeft: 60,
    fontSize: 20,
    textTransform: 'capitalize',
  },
});

export default ImageAccountStyle;
