import {StyleSheet} from 'react-native';

const ButtonToSellerStyle = StyleSheet.create({
  containerImageAndName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 7,
    marginHorizontal: 10,
    padding: 5,
    marginTop: 7,
    borderRadius: 20,
  },
  imageLoading: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginLeft: -12,
    backgroundColor: '#F4F4F4',
    elevation:1
  },
  containerLoandLabels: {
    position: 'absolute',
    top: 90,
    elevation:1
  },
  labelNameLoading: {
    color: '#fff',
    marginLeft: 60,
    fontSize: 12,
    textTransform: 'capitalize',
    width: 100,
    backgroundColor: '#fff',
    height: 15,
    borderRadius: 4,
    elevation:1
  },
  labelUserTypeLoading: {
    color: '#fff',
    marginTop: 2,
    marginLeft: 60,
    fontSize: 10,
    textTransform: 'capitalize',
    width: 80,
    backgroundColor: '#fff',
    height: 10,
    borderRadius: 4,
    elevation:1
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginLeft: -12,
    
  },
  textInfo: {
    fontSize: 15,
    color: 'black',
    marginTop: 5,
  },
  containerLabels: {
    marginLeft: 20,

    width: 315,
    paddingStart: 10,
    paddingVertical: 20,
    position: 'absolute',
    left: -14,
    bottom: 12,
    zIndex: 0,

    borderRadius: 100,
  },
  labelName: {
    color: '#000',
    marginLeft: 60,
    fontSize: 15,
    textTransform: 'capitalize',
  },
  labelUserType: {
    color: '#000',
    marginLeft: 60,
    fontSize: 10,
    textTransform: 'capitalize',
  },
});

export default ButtonToSellerStyle;
