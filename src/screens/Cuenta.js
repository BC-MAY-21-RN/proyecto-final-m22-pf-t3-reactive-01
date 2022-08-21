import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, Pressable} from 'react-native';
import Header from '../components/atoms/Header';
import {CuentaStyle} from './Styles';
import ModalInput from '../components/atoms/ModalInput/index';
import ModalWarningDelete from '../components/atoms/ModalWarningDelete';
import Loader from '../components/atoms/Loader';
import Input from '../components/atoms/InputCampAccount';
import ImageAccount from '../components/atoms/ImageAccount';
import ModalRestorePassword from '../components/atoms/ModalRestorePassword';
import {useUser} from '../utils/user';
import {accountStore} from '../utils/account';

const Cuenta = ({navigation}) => {
  const userInfo = useUser(state => state.user);
  const setDeleteAccount = accountStore(state => state.setDeleteAccount);
  const setRestore = accountStore(state => state.setRestore);
  const loading = accountStore(state => state.loading);
  const setLoading = accountStore(state => state.setLoading);
  return (
    <>
      <Header name="Account" navigation={navigation} BackBtn />
      {loading && !userInfo ? (
        <Loader state={loading} text={'loading..'} stateEdit={setLoading} />
      ) : (
        <>
          {loading && (
            <Loader state={loading} text={'loading..'} stateEdit={setLoading} />
          )}
          <ScrollView style={CuentaStyle.container}>
            <ImageAccount />

            <View>
              <View style={CuentaStyle.DataContainer}>
                <Text style={CuentaStyle.titleDataContainer}>Account data</Text>
                <ModalInput />
                <Input
                  userInfo={userInfo.userName}
                  campName={'User'}
                  iconName={'person-outline'}
                  required={true}
                />
                <Input
                  userInfo={userInfo.email}
                  campName={'Email'}
                  iconName={'mail-outline'}
                  required={true}
                />
                <Input
                  userInfo={userInfo.userType}
                  campName={'Usertype'}
                  iconName={'finger-print-outline'}
                  required={true}
                />
              </View>

              <View style={CuentaStyle.DataContainer}>
                <Text style={CuentaStyle.titleDataContainer}>User data</Text>
                <Input
                  userInfo={userInfo.fullName}
                  campName={'Fullname'}
                  iconName={'reader-outline'}
                  required={false}
                />
                <Input
                  userInfo={userInfo.phone}
                  campName={'Phone'}
                  iconName={'call-outline'}
                  required={false}
                />
                <Input
                  userInfo={userInfo.country}
                  campName={'Country'}
                  iconName={'map-outline'}
                  required={false}
                />
                <Input
                  userInfo={userInfo.state}
                  campName={'State'}
                  iconName={'navigate-outline'}
                  required={false}
                />
                <Input
                  userInfo={userInfo.address}
                  campName={'Address'}
                  iconName={'navigate-circle-outline'}
                  required={false}
                />
               
              </View>
            </View>
            <View style={CuentaStyle.containerSettings}>
              <ModalWarningDelete />
              <Pressable
                style={CuentaStyle.buttonDeleteAccount}
                onPress={() => {
                  setDeleteAccount(true);
                }}>
                <Text style={CuentaStyle.textDeleteAccount}>
                  Delete Account
                </Text>
              </Pressable>

              <ModalRestorePassword />
              <Pressable
                style={CuentaStyle.buttonRestorePassword}
                onPress={() => {
                  setRestore(true);
                }}>
                <Text style={CuentaStyle.textRestorePassword}>
                  Change pasword
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};
export default Cuenta;
