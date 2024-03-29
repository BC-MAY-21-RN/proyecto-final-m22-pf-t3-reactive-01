import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';
import pcikerStyles from './pickerStyles';

const Picker = props => {
  const {
    oldImage,
    url,
    setUrl = () => {},
    setImage = () => {},
    setPath = () => {},
  } = props;
  const addImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let {fileName, uri} = response.assets[0];
        setImage(fileName);
        setUrl(uri);
        setPath({fileName, uri});
      }
    });
  };
  return (
    <View style={pcikerStyles.container}>
      {url ? (
        <Image source={{uri: url}} style={{width: '100%', height: 200}} />
      ) : (
        <View>
          {oldImage ? (
            <Image
              source={{uri: oldImage}}
              style={{width: '100%', height: 200}}
            />
          ) : (
            <View style={pcikerStyles.textContainer}>
              <Text style={pcikerStyles.text}>No file chosen</Text>
              <Icon name="camera" size={35} color="#67679E" />
            </View>
          )}
        </View>
      )}
      <TouchableOpacity
        onPress={addImage}
        style={pcikerStyles.uploadBtnContainer}>
        <Icon name="upload" size={20} color="white" />
        <Text style={pcikerStyles.btnText}> Choose a file</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Picker;
