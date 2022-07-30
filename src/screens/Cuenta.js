import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/atoms/Header';
import {CuentaStyle} from './Styles';
import auth from '@react-native-firebase/auth';
import {deleteCamp, getUserInfo, userID} from '../auth/authFirestore';
import ModalInput from '../components/atoms/ModalInput/index';
import ModalWarningDelete from '../components/atoms/ModalWarningDelete';
import Loader from '../components/atoms/Loader';

const Cuenta = ({navigation}) => {
  const current = auth().currentUser;
  const [action, setAction] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [inputSelect, setInputSelect] = useState('');
  const [iconInput, setIconInput] = useState('sync-outline');
  const [uID, setUID] = useState();
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteToCamp, setDeleteToCamp] = useState(false);

  useEffect(() => {
    if (current) {
      userID(current.uid, setUID);
      setLoading(true);
    }
  }, []);
  useEffect(() => {
    if (current) {
      getUserInfo(current, setUserInfo);
    }
  }, [(current && modalVisible) || (current && userInfo)]);

  return (
    <>
      <View>
        <Header name="Account" navigation={navigation} />
      </View>

      { loading && !userInfo ? (
        <>
          <Loader state={loading} text={'loading..'} stateEdit={setLoading} />
        </>
      ) : (
        <>
          {loading && deleteToCamp ? (
            <Loader state={loading} text={'loading..'} stateEdit={setLoading} />
          ) : (
            <></>
          )}
          <View style={CuentaStyle.container}>
            <View style={CuentaStyle.containerImageAndName}>
              <Image
                source={{
                  uri: userInfo.image
                    ? userInfo.image
                    : 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png',
                }}
                style={CuentaStyle.image}
              />
              <Icon
                style={CuentaStyle.iconChangeImage}
                name={'sync-outline'}
                size={16}
                color="#3140C2"
                onPress={() => {
                  setAction('Change'),
                    setModalVisible(true),
                    setInputSelect('Image');
                  setIconInput('image-outline');
                }}
              />
              <View>
                <Text style={CuentaStyle.labelName}>{userInfo.firstname}</Text>
                <Text style={CuentaStyle.labelUserType}>
                  {userInfo.usertype}
                </Text>
              </View>
            </View>
            <View>
              <Text style={CuentaStyle.titleDataContainer}>Account data</Text>
              <View style={CuentaStyle.containerLabelInfo}>
                <ModalInput
                statusImage={userInfo.image}
                  action={action}
                  uID={uID}
                  input={inputSelect}
                  state={modalVisible}
                  stateEdit={setModalVisible}
                  iconInput={iconInput}
                  imageProfile={
                    userInfo.image
                      ? userInfo.image
                      : 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png'
                  }
                />
                <View style={CuentaStyle.iconData}>
                  <Icon
                    name={'person-outline'}
                    size={20}
                    color={'#3140C2'}></Icon>
                  <Text style={CuentaStyle.labelInfo}>User</Text>
                </View>

                <Text style={CuentaStyle.labelInfo}>{userInfo.firstname}</Text>
                <Icon
                  name={'create-outline'}
                  size={20}
                  color="#767676"
                  onPress={() => {
                    setAction('Change'),
                      setModalVisible(true),
                      setInputSelect('User');
                    setIconInput('person-outline');
                  }}
                />
              </View>
              <View style={CuentaStyle.containerLabelInfo}>
                <View style={CuentaStyle.iconData}>
                  <Icon
                    name={'mail-outline'}
                    size={20}
                    color={'#3140C2'}></Icon>
                  <Text style={CuentaStyle.labelInfo}>Email</Text>
                </View>
                <Text style={CuentaStyle.labelInfo}>{userInfo.email}</Text>
                <Icon
                  name={'create-outline'}
                  size={20}
                  color="#767676"
                  onPress={() => {
                    setAction('Change'),
                      setModalVisible(true),
                      setInputSelect('Email');
                    setIconInput('mail-outline');
                  }}
                />
              </View>
              <View style={CuentaStyle.containerLabelInfo}>
                <View style={CuentaStyle.iconData}>
                  <Icon
                    name={'finger-print-outline'}
                    size={20}
                    color={'#3140C2'}></Icon>
                  <Text style={CuentaStyle.labelInfo}>User Type</Text>
                </View>
                <Text style={CuentaStyle.labelInfo}>{userInfo.usertype}</Text>
                <Icon
                  name={'create-outline'}
                  size={20}
                  color="#767676"
                  onPress={() => {
                    setAction('Change'),
                      setModalVisible(true),
                      setInputSelect('Usertype');
                    setIconInput('man-outline');
                  }}
                />
              </View>
            </View>
            <View>
              <Text style={CuentaStyle.titleDataContainer}>User data</Text>
              <View>
                <View style={CuentaStyle.containerLabelInfo}>
                  <View style={CuentaStyle.iconData}>
                    <Icon
                      name={'reader-outline'}
                      size={20}
                      color={'#3140C2'}></Icon>
                    <Text style={CuentaStyle.labelInfo}>full name</Text>
                  </View>
                  <Text style={CuentaStyle.labelInfo}>
                    {userInfo.fullname ? userInfo.fullname : ''}
                  </Text>

                  <Icon
                    name={userInfo.fullname ? 'create-outline' : 'add-outline'}
                    size={20}
                    color={userInfo.fullname ? "#767676" : '#3140C2'}
                    style={userInfo.fullname ? CuentaStyle.iconEdit : ''}
                    onPress={() => {
                      userInfo.fullname
                        ? (setAction('Change'),
                          setModalVisible(true),
                          setInputSelect('Fullname'),
                          setIconInput('reader-outline'))
                        : (setAction('Add'),
                          setModalVisible(true),
                          setInputSelect('Fullname'),
                          setIconInput('reader-outline'));
                    }}
                  />
                  {userInfo.fullname ? (
                    <Icon
                      name={'trash-outline'}
                      size={20}
                      color={'#D40C1C'}
                      
                      onPress={() => {
                        userInfo.fullname
                          ? (deleteCamp('Fullname', uID),
                            setLoading(true),
                            setDeleteToCamp(true))
                          : (err) => {
                              console.log('Error: '+err);
                            };
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </View>
                <View style={CuentaStyle.containerLabelInfo}>
                  <View style={CuentaStyle.iconData}>
                    <Icon
                      name={'call-outline'}
                      size={20}
                      color={'#3140C2'}></Icon>
                    <Text style={CuentaStyle.labelInfo}>Cel</Text>
                  </View>
                  <Text style={CuentaStyle.labelInfo}>
                    {userInfo.cel ? userInfo.cel : ''}
                  </Text>
                  <Icon
                    name={userInfo.cel ? 'create-outline' : 'add-outline'}
                    size={20}
                    color={userInfo.cel ? "#767676" : '#3140C2'}
                    style={userInfo.cel ? CuentaStyle.iconEdit : ''}
                    onPress={() => {
                      userInfo.cel
                        ? (setAction('Change'),
                          setModalVisible(true),
                          setInputSelect('Cel'),
                          setIconInput('call-outline'))
                        : (setAction('Add'),
                          setModalVisible(true),
                          setInputSelect('Cel'),
                          setIconInput('call-outline'));
                    }}
                  />
                   {userInfo.cel ? (
                    <Icon
                      name={'trash-outline'}
                      size={20}
                      color={'#D40C1C'}
                     
                      onPress={() => {
                        userInfo.cel
                          ? (deleteCamp('Cel', uID),
                            setLoading(true),
                            setDeleteToCamp(true))
                          : (err) => {
                              console.log('Error: '+err);
                            };
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </View>
                <View style={CuentaStyle.containerLabelInfo}>
                  <View style={CuentaStyle.iconData}>
                    <Icon
                      name={'card-outline'}
                      size={20}
                      color={'#3140C2'}></Icon>
                    <Text style={CuentaStyle.labelInfo}>DNI</Text>
                  </View>
                  <Text style={CuentaStyle.labelInfo}>
                    {userInfo.dni ? userInfo.dni : ''}
                  </Text>
                  <Icon
                    name={userInfo.dni ? 'create-outline' : 'add-outline'}
                    size={20}
                    color={userInfo.dni ? "#767676" : '#3140C2'}
                    style={userInfo.dni ? CuentaStyle.iconEdit : ''}
                    onPress={() => {
                      userInfo.dni
                        ? (setAction('Change'),
                          setModalVisible(true),
                          setInputSelect('Dni'),
                          setIconInput('card-outline'))
                        : (setAction('Add'),
                          setModalVisible(true),
                          setInputSelect('Dni'),
                          setIconInput('card-outline'));
                    }}
                  />
                  {userInfo.dni ? (
                    <Icon
                      name={'trash-outline'}
                      size={20}
                      color={'#D40C1C'}
                      
                      onPress={() => {
                        userInfo.dni
                          ? (deleteCamp('Dni', uID),
                            setLoading(true),
                            setDeleteToCamp(true))
                          : (err) => {
                              console.log('Error: '+err);
                            };
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            </View>

            <ModalWarningDelete
              state={deleteAccount}
              stateEdit={setDeleteAccount}
              uID={uID}
            />
            <Pressable
              style={CuentaStyle.buttonDeleteAccount}
              onPress={() => {
                setDeleteAccount(true);
              }}>
              <Text style={CuentaStyle.textDeleteAccount}>Delete Account</Text>
            </Pressable>
          </View>
        </>
      )}
    </>
  );
};

export default Cuenta;
