import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';
import pcikerStyles from './pickerStyles';
import auth from '@react-native-firebase/auth';

const Picker = props => {
  const {id, carpeta} = props;
  const [image, setImage] = useState();
  const [url, setUrl] = useState(undefined);
  const [encontrado, setEncontrado] = useState(false);

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
        let respuesta = response.assets[0];
        setImage(respuesta);
        setUrl(respuesta.uri);
        setEncontrado(true);
      }
    });
  };

  return (
    <View style={pcikerStyles.container}>
      {url && (
        <Image source={{uri: url}} style={{width: '100%', height: 200}} />
      )}
      {url ? null : (
        <View style={pcikerStyles.textContainer}>
          <Text style={pcikerStyles.text}>No file chosen</Text>
          <Icon name="camera" size={35} color="#67679E" />
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
