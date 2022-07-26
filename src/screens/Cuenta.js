import React, {useEffect, useState} from 'react';
import {View, Text, Button, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/atoms/Header';
import {CuentaStyle} from './Styles';
import auth from '@react-native-firebase/auth';
import {getUserInfo} from '../auth/authFirestore';

const Cuenta = ({navigation}) => {
  const current = auth().currentUser;
  const [userInfo, setUserInfo] = useState('');
  useEffect(() => {
    if (current) {
      getUserInfo(current, setUserInfo);
    }
  }, [current]);
  console.log(userInfo);



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
                : 'https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1658853261~hmac=f3a929966a7622cb1074f524742c56b7',
            }}
            style={CuentaStyle.image}
          />
          <Icon
            style={CuentaStyle.iconChangeImage}
            name={'sync-outline'}
            size={16}
            color="#3140C2"
          />
          <View>
            <Text style={CuentaStyle.labelName}>{userInfo.firstname}</Text>
            <Text style={CuentaStyle.labelUserType}>{userInfo.usertype}</Text>
          </View>
        </View>
        <View>
          <Text style={CuentaStyle.titleDataContainer}>Account data</Text>
          <View style={CuentaStyle.containerLabelInfo}>
            <View style={CuentaStyle.iconData}>
              <Icon name={'person-outline'} size={20} color={'black'}></Icon>
              <Text style={CuentaStyle.labelInfo}>User</Text>
            </View>

            <Text style={CuentaStyle.labelInfo}>{userInfo.firstname}</Text>
            <Icon name={'create-outline'} size={20} color="#3140C2" />
          </View>
          <View style={CuentaStyle.containerLabelInfo}>
            <View style={CuentaStyle.iconData}>
              <Icon name={'mail-outline'} size={20} color={'black'}></Icon>
              <Text style={CuentaStyle.labelInfo}>Email</Text>
            </View>
            <Text style={CuentaStyle.labelInfo}>{userInfo.email}</Text>
            <Icon name={'create-outline'} size={20} color="#3140C2" />
          </View>
          <View style={CuentaStyle.containerLabelInfo}>
            <View style={CuentaStyle.iconData}>
              <Icon name={'man-outline'} size={20} color={'black'}></Icon>
              <Text style={CuentaStyle.labelInfo}>User Type</Text>
            </View>
            <Text style={CuentaStyle.labelInfo}>{userInfo.usertype}</Text>
            <Icon name={'create-outline'} size={20} color="#3140C2" />
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
                {userInfo.fullName ? userInfo.fullName : ''}
              </Text>

              <Icon
                name={
                  userInfo.fullName ? 'create-outline' : 'add-outline'
                }
                size={20}
                color="#3140C2"
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
