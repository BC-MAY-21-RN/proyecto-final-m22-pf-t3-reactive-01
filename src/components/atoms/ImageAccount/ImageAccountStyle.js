import {StyleSheet} from 'react-native';

const ImageAccountStyle = StyleSheet.create({
  containerImageAndName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
    padding: 10,
    backgroundColor: '#3140C2',
    elevation: 2,
    borderRadius: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    elevation: 1,
  },
  iconChangeImage: {
    position: 'absolute',
    top: 67,
    left: 63,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 30,
    elevation: 2,
  },
  labelName: {
    color: '#F4F4F4',
    marginLeft: 30,
    fontSize: 25,
    textTransform: 'capitalize',
  },
  labelUserType: {
    color: '#F4F4F4',
    marginLeft: 30,
    fontSize: 20,
    textTransform: 'capitalize',
  },
});

export default ImageAccountStyle;
