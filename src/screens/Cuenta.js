import React, {useEffect, useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/atoms/Header';
import {CuentaStyle} from './Styles';
import auth from '@react-native-firebase/auth';
import {getUserInfo, userID} from '../auth/authFirestore';
import ModalInput from '../components/atoms/ModalInput/index';

const Cuenta = ({navigation}) => {
  const current = auth().currentUser;
  const [action, setAction] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [inputSelect, setInputSelect] = useState('');
  const [iconInput, setIconInput] = useState('sync-outline');
  const [uID, setUID] = useState();
  useEffect(() => {
    if (current) {
      userID(current.uid, setUID);
    }
  }, []);
  useEffect(() => {
    if (current) {
      getUserInfo(current, setUserInfo);
    }
  }, [current && modalVisible]);

  return (
    <>
      <View>
        <Header name="Account" navigation={navigation} />
      </View>

      <View style={CuentaStyle.container}>
        <View style={CuentaStyle.containerImageAndName}>
          <Image
            source={{
              uri: userInfo.image
                ? userInfo.image
                : 'https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1659021792~hmac=59d2ecb84a4d47e3c5261fd88f6d9f21',
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
            <Text style={CuentaStyle.labelUserType}>{userInfo.usertype}</Text>
          </View>
        </View>
        <View>
          <Text style={CuentaStyle.titleDataContainer}>Account data</Text>
          <View style={CuentaStyle.containerLabelInfo}>
            <ModalInput
              action={action}
              uID={uID}
              input={inputSelect}
              state={modalVisible}
              stateEdit={setModalVisible}
              iconInput={iconInput}
              imageProfile={
                userInfo.image
                  ? userInfo.image
                  : 'https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1659021792~hmac=59d2ecb84a4d47e3c5261fd88f6d9f21'
              }
            />
            <View style={CuentaStyle.iconData}>
              <Icon name={'person-outline'} size={20} color={'black'}></Icon>
              <Text style={CuentaStyle.labelInfo}>User</Text>
            </View>

            <Text style={CuentaStyle.labelInfo}>{userInfo.firstname}</Text>
            <Icon
              name={'create-outline'}
              size={20}
              color="#3140C2"
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
              <Icon name={'mail-outline'} size={20} color={'black'}></Icon>
              <Text style={CuentaStyle.labelInfo}>Email</Text>
            </View>
            <Text style={CuentaStyle.labelInfo}>{userInfo.email}</Text>
            <Icon
              name={'create-outline'}
              size={20}
              color="#3140C2"
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
              <Icon name={'man-outline'} size={20} color={'black'}></Icon>
              <Text style={CuentaStyle.labelInfo}>User Type</Text>
            </View>
            <Text style={CuentaStyle.labelInfo}>{userInfo.usertype}</Text>
            <Icon
              name={'create-outline'}
              size={20}
              color="#3140C2"
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
                <Icon name={'reader-outline'} size={20} color={'black'}></Icon>
                <Text style={CuentaStyle.labelInfo}>full name</Text>
              </View>
              <Text style={CuentaStyle.labelInfo}>
                {userInfo.fullname ? userInfo.fullname : ''}
              </Text>

              <Icon
                name={userInfo.fullname ? 'create-outline' : 'add-outline'}
                size={20}
                color="#3140C2"
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
            </View>
            <View style={CuentaStyle.containerLabelInfo}>
              <View style={CuentaStyle.iconData}>
                <Icon name={'call-outline'} size={20} color={'black'}></Icon>
                <Text style={CuentaStyle.labelInfo}>Cel</Text>
              </View>
              <Text style={CuentaStyle.labelInfo}>
                {userInfo.cel ? userInfo.cel : ''}
              </Text>
              <Icon
                name={userInfo.cel ? 'create-outline' : 'add-outline'}
                size={20}
                color="#3140C2"
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
            </View>
            <View style={CuentaStyle.containerLabelInfo}>
              <View style={CuentaStyle.iconData}>
                <Icon name={'card-outline'} size={20} color={'black'}></Icon>
                <Text style={CuentaStyle.labelInfo}>DNI</Text>
              </View>
              <Text style={CuentaStyle.labelInfo}>
                {userInfo.dni ? userInfo.dni : ''}
              </Text>
              <Icon
                name={userInfo.dni ? 'create-outline' : 'add-outline'}
                size={20}
                color="#3140C2"
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
            </View>
          </View>
        </View>
        <Pressable style={CuentaStyle.buttonDeleteAccount}>
          <Text style={CuentaStyle.textDeleteAccount}>Delete Account</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Cuenta;
