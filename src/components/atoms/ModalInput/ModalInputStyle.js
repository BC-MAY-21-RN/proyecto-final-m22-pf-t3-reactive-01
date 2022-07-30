import {StyleSheet} from 'react-native';

const ModalInputStyle = StyleSheet.create({
  containerModal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#0000004e',
    height: 800,
  },
  conatinerView: {
    backgroundColor: 'black',
    padding: 30,
    paddingHorizontal: 40,
    borderRadius: 20,
    backgroundColor: '#F4F4F4',
    elevation: 3,
    maxWidth: 300,
    marginBottom: 160,
  },
  iconClose: {
    position: 'absolute',
    top: 10,
    left: 260,
  },
  iconCloseSelect: {position: 'absolute', top: 10, left: 245},
  iconInput: {
    position: 'absolute',
    top: 70,
    left: 60,
    zIndex: 1,
  },
  text: {
    color: 'black',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  containerErrorMessage: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 4,
    marginBottom: -6,
    maxWidth: 200,
    maxHeight: 15,
    alignItems: 'center',
  },
  errorMessage: {
    color: 'red',
  },
  input: {
    paddingRight: 20,
    paddingLeft: 60,
    width: 210,
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
    elevation: 4,
    color: '#3140C2',
  },
  switchSelector: {marginTop: 10},

  pressableToSave: {
    backgroundColor: '#3140C2',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    elevation: 5,
  },
  textToSave: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'capitalize',
  },
  imagePickerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  pressableImagePicker: {
    backgroundColor: '#F4F4F4',
    elevation: 3,
    marginHorizontal: 13,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
  },
  textImagePickerPressable: {
    color: 'black',
    paddingHorizontal: 20,
    marginLeft: 12,
  },
  iconImagePicker: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  iconImagePickerDelete:{
    backgroundColor:'#F4F4F4',
    borderRadius:100,
    padding:8,
    position: 'absolute',
    top: 140,
    left: 100,
    elevation:5,
    zIndex:2
  },
  filenameImage: {
    color: '#000',
    marginVertical: 5,
    marginLeft: 20,
    textAlign: 'center',
  },
  imagePreviewContainer:{elevation:5,
    width: 154,
    height: 154,
    elevation:5,
    marginLeft: 39,
    marginVertical: 10,
    borderRadius: 90,},
  imagePreviewStyle: {
    width: 150,
    height: 150,
    borderRadius: 90,
  
   
 
  },
  iconImageUpload: {
    position: 'absolute',
    top: 5,
    left: 15,
  },
  containerFilename: {
    backgroundColor: '#F4F4F4',
    elevation: 3,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: -15,
    marginBottom:8
  },
  iconCloseImagePicker: {
    position: 'absolute',
    top: 10,
    left: 270,
  },
  containerErrorMessageImage:{display: 'flex',
  flexDirection: 'row',
  marginLeft: -12,
 
  marginBottom: -10,
  maxWidth: 200,
  maxHeight: 15,
  }
});

export default ModalInputStyle;
