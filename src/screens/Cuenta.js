import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/atoms/Header';
import {CuentaStyle} from './Styles';
import auth from '@react-native-firebase/auth';
import {deleteCamp, getUserInfo} from '../auth/authFirestore';
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
      setUID(current.uid);
      setLoading(true);
    }
  }, []);
  useEffect(() => {
    if (current) {
      getUserInfo(current, setUserInfo);
    }
  }, [current, modalVisible]);
  return (
    <>
      <Header name="Account" navigation={navigation} BackBtn />
      {loading && !userInfo ? (
        <Loader state={loading} text={'loading..'} stateEdit={setLoading} />
      ) : (
        <>
          {loading && deleteToCamp && (
            <Loader state={loading} text={'loading..'} stateEdit={setLoading} />
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
                  setAction('Change');
                  setModalVisible(true);
                  setInputSelect('Image');
                  setIconInput('image-outline');
                }}
              />
              <View>
                <Text style={CuentaStyle.labelName}>{userInfo.userName}</Text>
                <Text style={CuentaStyle.labelUserType}>
                  {userInfo.userType}
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
                  <Icon name={'person-outline'} size={20} color={'#3140C2'} />
                  <Text style={CuentaStyle.labelInfo}>User</Text>
                </View>

                <Text style={CuentaStyle.labelInfo}>{userInfo.userName}</Text>
                <Icon
                  name={'create-outline'}
                  size={20}
                  color="#767676"
                  onPress={() => {
                    setAction('Change');
                    setModalVisible(true);
                    setInputSelect('User');
                    setIconInput('person-outline');
                  }}
                />
              </View>
              <View style={CuentaStyle.containerLabelInfo}>
                <View style={CuentaStyle.iconData}>
                  <Icon name={'mail-outline'} size={20} color={'#3140C2'} />
                  <Text style={CuentaStyle.labelInfo}>Email</Text>
                </View>
                <Text style={CuentaStyle.labelInfo}>{userInfo.email}</Text>
                <Icon
                  name={'create-outline'}
                  size={20}
                  color="#767676"
                  onPress={() => {
                    setAction('Change');
                    setModalVisible(true);
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
                    color={'#3140C2'}
                  />
                  <Text style={CuentaStyle.labelInfo}>User Type</Text>
                </View>
                <Text style={CuentaStyle.labelInfo}>{userInfo.userType}</Text>
                <Icon
                  name={'create-outline'}
                  size={20}
                  color="#767676"
                  onPress={() => {
                    setAction('Change');
                    setModalVisible(true);
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
                    <Icon name={'reader-outline'} size={20} color={'#3140C2'} />
                    <Text style={CuentaStyle.labelInfo}>full name</Text>
                  </View>
                  <Text style={CuentaStyle.labelInfo}>
                    {userInfo.fullName ? userInfo.fullName : ''}
                  </Text>

                  <Icon
                    name={userInfo.fullName ? 'create-outline' : 'add-outline'}
                    size={20}
                    color={userInfo.fullName ? '#767676' : '#3140C2'}
                    style={userInfo.fullName ? CuentaStyle.iconEdit : ''}
                    onPress={() => {
                      userInfo.fullName
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
                  {userInfo.fullName && (
                    <Icon
                      name={'trash-outline'}
                      size={20}
                      color={'#D40C1C'}
                      onPress={() => {
                        deleteCamp('Fullname', uID);
                        setLoading(true);
                        setDeleteToCamp(true);
                      }}
                    />
                  )}
                </View>
                <View style={CuentaStyle.containerLabelInfo}>
                  <View style={CuentaStyle.iconData}>
                    <Icon name={'call-outline'} size={20} color={'#3140C2'} />
                    <Text style={CuentaStyle.labelInfo}>Cel</Text>
                  </View>
                  <Text style={CuentaStyle.labelInfo}>
                    {userInfo.cel ? userInfo.cel : ''}
                  </Text>
                  <Icon
                    name={userInfo.cel ? 'create-outline' : 'add-outline'}
                    size={20}
                    color={userInfo.cel ? '#767676' : '#3140C2'}
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
                  {userInfo.cel && (
                    <Icon
                      name={'trash-outline'}
                      size={20}
                      color={'#D40C1C'}
                      onPress={() => {
                        deleteCamp('Cel', uID);
                        setLoading(true);
                        setDeleteToCamp(true);
                      }}
                    />
                  )}
                </View>
                <View style={CuentaStyle.containerLabelInfo}>
                  <View style={CuentaStyle.iconData}>
                    <Icon name={'card-outline'} size={20} color={'#3140C2'} />
                    <Text style={CuentaStyle.labelInfo}>DNI</Text>
                  </View>
                  <Text style={CuentaStyle.labelInfo}>
                    {userInfo.dni ? userInfo.dni : ''}
                  </Text>
                  <Icon
                    name={userInfo.dni ? 'create-outline' : 'add-outline'}
                    size={20}
                    color={userInfo.dni ? '#767676' : '#3140C2'}
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
                  {userInfo.dni && (
                    <Icon
                      name={'trash-outline'}
                      size={20}
                      color={'#D40C1C'}
                      onPress={() => {
                        deleteCamp('Dni', uID);
                        setLoading(true);
                        setDeleteToCamp(true);
                      }}
                    />
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
