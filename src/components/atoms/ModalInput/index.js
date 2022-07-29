import React, {useEffect, useState} from 'react';
import {Modal, Pressable, Text, TextInput, View, Image} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import ModalInputStyle from './ModalInputStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import validateSchema from '../../../utils/schemasValidateProfile';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {addInfo} from '../../../auth/authFirestore';
import requestCameraPermission from '../../../utils/requestCameraPermissions';

const ModalInput = props => {
  const {action, input, state, stateEdit, iconInput, imageProfile, uID} = props;
  const [inputValue, setInputValue] = useState('');
  const [iconAction, setIconAction] = useState('create-outline');
  const [usertypeSelect, setUsertypeSelect] = useState(false);
  const [sumbitFailed, setSubmitFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [numericInput, setNumericInput] = useState(false);
  const [imageInput, setImageInput] = useState(false);
  const [image, setImage] = useState(imageProfile);
  const optionImage = {
    title: 'Select Image',
    customButtons: [
      {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const options = [
    {label: 'Admin', value: 'Admin'},
    {label: 'Client', value: 'Client'},
    {label: 'Seller', value: 'Seller'},
  ];

  useEffect(() => {
    if (input === 'Image') {
      setImageInput(true);
      setImage(imageProfile);
    } else if (input !== 'Image') {
      setImageInput(false);
    }
  }, [state]);
  useEffect(() => {
    if (input === 'Cel' || input === 'Dni') {
      setNumericInput(true);
    } else if (input !== 'Cel' && input !== 'Dni') {
      setNumericInput(false);
    }
  }, [state]);

  useEffect(() => {
    if (input === 'Usertype' && usertypeSelect === false) {
      setUsertypeSelect(true);
    } else if (input !== 'Usertype' && usertypeSelect !== false) {
      setUsertypeSelect(false);
    }
  }, [state]);
  useEffect(() => {
    if (action != '') {
      if (action == 'Add') {
        setIconAction('add-circle-outline');
      } else {
        setIconAction('create-outline');
      }
    }
  }, [action]);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={state}
      onRequestClose={() => {
        stateEdit(!state);
      }}>
      <View style={ModalInputStyle.containerModal}>
        <View style={ModalInputStyle.conatinerView}>
          {usertypeSelect ? (
            <Icon
              style={ModalInputStyle.iconCloseSelect}
              name={'close-circle-outline'}
              size={20}
              color={'#767676'}
              onPress={() => {
                setUsertypeSelect(false);
                setSubmitFailed(false);
                stateEdit(!state);
                setNumericInput(false);
                setInputValue('');
              }}
            />
          ) : (
            <>
              {imageInput ? (
                <Icon
                  style={ModalInputStyle.iconCloseImagePicker}
                  name={'close-circle-outline'}
                  size={20}
                  color={'#767676'}
                  onPress={() => {
                    setSubmitFailed(false);
                    stateEdit(!state);
                    setNumericInput(false);
                    setImage('');
                    setInputValue('');
                  }}
                />
              ) : (
                <Icon
                  style={ModalInputStyle.iconClose}
                  name={'close-circle-outline'}
                  size={20}
                  color={'#767676'}
                  onPress={() => {
                    setSubmitFailed(false);
                    stateEdit(!state);
                    setNumericInput(false);
                    setImage('');
                    setInputValue('');
                  }}
                />
              )}
            </>
          )}

          <Text style={ModalInputStyle.text}>
            <Icon name={iconAction} size={15} color={'#3140C2'} /> {action} your{' '}
            {input}
          </Text>

          {usertypeSelect ? (
            <>
              <SwitchSelector
                options={options}
                initial={0}
                height={45}
                style={ModalInputStyle.switchSelector}
                buttonColor={'#3140C2'}
                borderColor={'#3140C2'}
                borderRadius={50}
                onPress={value => setInputValue(value)}
              />
              {sumbitFailed ? (
                <View style={ModalInputStyle.containerErrorMessage}>
                  <Icon name={'alert-circle-outline'} size={15} color={'red'} />
                  <Text style={ModalInputStyle.errorMessage}>
                    {errorMessage}
                  </Text>
                </View>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              {imageInput ? (
                <>
                  <View>
                    <Image
                      style={ModalInputStyle.imagePreviewStyle}
                      source={{uri: image}}
                    />
                  </View>
                  <View style={ModalInputStyle.imagePickerContainer}>
                    <Pressable
                      style={ModalInputStyle.pressableImagePicker}
                      onPress={() => {
                        requestCameraPermission(),
                          launchCamera(optionImage, response => {
                            setImage(response.assets[0].uri);
                            setInputValue(response.assets[0].uri);
                          });
                      }}>
                      <Icon
                        name={'camera-outline'}
                        size={16}
                        color={'#3140C2'}
                        style={ModalInputStyle.iconImagePicker}
                      />
                      <Text style={ModalInputStyle.textImagePickerPressable}>
                        Camera
                      </Text>
                    </Pressable>
                    <Pressable
                      style={ModalInputStyle.pressableImagePicker}
                      onPress={() => {
                        launchImageLibrary(optionImage, response => {
                          setImage(response.assets[0].uri);
                          setInputValue(response.assets[0].uri);
                        });
                      }}>
                      <Icon
                        name={'folder-open-outline'}
                        size={16}
                        color={'#FC9C04'}
                        style={ModalInputStyle.iconImagePicker}
                      />
                      <Text style={ModalInputStyle.textImagePickerPressable}>
                        Library
                      </Text>
                    </Pressable>
                  </View>
                  <View style={ModalInputStyle.containerFilename}>
                    <Icon
                      name={'image-outline'}
                      size={16}
                      color={'#06AB70'}
                      style={ModalInputStyle.iconImageUpload}
                    />
                    <Text style={ModalInputStyle.filenameImage}>{image}</Text>
                  </View>
                  {sumbitFailed ? (
                    <View style={ModalInputStyle.containerErrorMessageImage}>
                      <Icon
                        name={'alert-circle-outline'}
                        size={15}
                        color={'red'}
                      />
                      <Text style={ModalInputStyle.errorMessage}>
                        {errorMessage}
                      </Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <>
                  <Icon
                    style={ModalInputStyle.iconInput}
                    name={iconInput}
                    size={20}
                    color={'#000'}
                  />
                  <TextInput
                    style={ModalInputStyle.input}
                    keyboardType={numericInput ? 'numeric' : 'default'}
                    onChangeText={event => {
                      setInputValue(event);
                    }}></TextInput>
                  {sumbitFailed ? (
                    <View style={ModalInputStyle.containerErrorMessage}>
                      <Icon
                        name={'alert-circle-outline'}
                        size={15}
                        color={'red'}
                      />
                      <Text style={ModalInputStyle.errorMessage}>
                        {errorMessage}
                      </Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}

          <Pressable
            style={ModalInputStyle.pressableToSave}
            onPress={() => {
              if (inputValue && input) {
                validateSchema(input, inputValue)
                  .then(() => {
                    console.log('to pass');
                    if (action == 'Add') {
                      addInfo({input: input, inputValue: inputValue}, uID);
                      stateEdit(!state);
                      setUsertypeSelect(false);
                      setImage('');
                      setSubmitFailed(false);

                      console.log(
                        `${input} is add and saved: ${inputValue}.... ${uID} `,
                      );
                      setInputValue('');
                      setNumericInput(false);
                    } else if (action === 'Change') {
                      addInfo({input: input, inputValue: inputValue}, uID);
                      stateEdit(!state);
                      setUsertypeSelect(false);
                      setImage('');
                      setSubmitFailed(false);
                      console.log(
                        `${input} is change and save: ${inputValue} `,
                      );
                      setInputValue('');
                      setNumericInput(false);
                    }
                  })
                  .catch(errr => {
                    const error = errr.message;
                    setSubmitFailed(true);
                    setErrorMessage(error);
                  });
              } else {
                setSubmitFailed(true),
                  imageInput
                    ? setErrorMessage(' Please select your image')
                    : usertypeSelect
                    ? setErrorMessage(' Please select one option')
                    : setErrorMessage(' Please complete the camp');
              }
            }}>
            <Text style={ModalInputStyle.textToSave}>Save changes</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalInput;
