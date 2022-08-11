import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Header from '../components/atoms/Header';
import {CuentaStyle} from './Styles';
import auth from '@react-native-firebase/auth';
import {getUserInfo} from '../auth/authFirestore';
import ModalInput from '../components/atoms/ModalInput/index';
import ModalWarningDelete from '../components/atoms/ModalWarningDelete';
import Loader from '../components/atoms/Loader';
import Input from '../components/atoms/InputCampAccount';
import ImageAccount from '../components/atoms/ImageAccount';
import ModalRestorePassword from '../components/atoms/ModalRestorePassword';

const Cuenta = ({navigation}) => {
  const current = auth().currentUser;
  const [userInfo, setUserInfo] = useState('');
  const [action, setAction] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [inputSelect, setInputSelect] = useState('');
  const [iconInput, setIconInput] = useState('sync-outline');
  const [uID, setUID] = useState();
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [restore, setRestore] = useState(false);
  const [loading, setLoading] = useState(false);

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
          {loading && (
            <Loader state={loading} text={'loading..'} stateEdit={setLoading} />
          )}
          <View style={CuentaStyle.container}>
            <ImageAccount
              userInfo={userInfo}
              setAction={setAction}
              setModalVisible={setModalVisible}
              setInputSelect={setInputSelect}
              setIconInput={setIconInput}
            />

            <View>
              <View style={CuentaStyle.DataContainer}>
                <Text style={CuentaStyle.titleDataContainer}>Account data</Text>
                <ModalInput
                  statusImage={userInfo.image}
                  action={'Change'}
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
                <Input
                  userInfo={userInfo.userName}
                  campName={'User'}
                  iconName={'person-outline'}
                  action={action}
                  required={true}
                  setModalVisible={setModalVisible}
                  setInputSelect={setInputSelect}
                  setIconInput={setIconInput}
                  setAction={setAction}
                  setLoading={setLoading}
                  uID={uID}
                />

                <Input
                  userInfo={userInfo.email}
                  campName={'Email'}
                  iconName={'mail-outline'}
                  action={action}
                  required={true}
                  setModalVisible={setModalVisible}
                  setInputSelect={setInputSelect}
                  setIconInput={setIconInput}
                  setAction={setAction}
                  setLoading={setLoading}
                  uID={uID}
                />

                <Input
                  userInfo={userInfo.userType}
                  campName={'Usertype'}
                  iconName={'finger-print-outline'}
                  action={action}
                  required={true}
                  setModalVisible={setModalVisible}
                  setInputSelect={setInputSelect}
                  setIconInput={setIconInput}
                  setAction={setAction}
                  setLoading={setLoading}
                  uID={uID}
                />
              </View>

              <View style={CuentaStyle.DataContainer}>
                <Text style={CuentaStyle.titleDataContainer}>User data</Text>
                <Input
                  userInfo={userInfo.fullName}
                  campName={'Fullname'}
                  iconName={'reader-outline'}
                  required={false}
                  setModalVisible={setModalVisible}
                  setInputSelect={setInputSelect}
                  setIconInput={setIconInput}
                  setLoading={setLoading}
                  setAction={setAction}
                  action={action}
                  uID={uID}
                />
                <Input
                  userInfo={userInfo.cel}
                  campName={'Cel'}
                  iconName={'call-outline'}
                  required={false}
                  setModalVisible={setModalVisible}
                  setInputSelect={setInputSelect}
                  setIconInput={setIconInput}
                  setLoading={setLoading}
                  setAction={setAction}
                  action={action}
                  uID={uID}
                />
                <Input
                  userInfo={userInfo.dni}
                  campName={'Dni'}
                  iconName={'card-outline'}
                  required={false}
                  setModalVisible={setModalVisible}
                  setInputSelect={setInputSelect}
                  setIconInput={setIconInput}
                  setLoading={setLoading}
                  action={action}
                  setAction={setAction}
                  uID={uID}
                />
              </View>
            </View>
            <View style={CuentaStyle.containerSettings}>
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
                <Text style={CuentaStyle.textDeleteAccount}>
                  Delete Account
                </Text>
              </Pressable>

              <ModalRestorePassword
                email={userInfo.email}
                state={restore}
                stateEdit={setRestore}
              />
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
          </View>
        </>
      )}
    </>
  );
};

export default Cuenta;
