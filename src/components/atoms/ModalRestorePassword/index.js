import {Modal, Pressable, Text, View} from 'react-native';
import ModalPassStyle from './ModalPassStyle';
import Loader from '../Loader';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {logout, restorePassword} from '../../../auth/authFirestore';

const ModalRestorePassword = props => {
  const {email, state, stateEdit} = props;
  const [loading, setLoading] = useState(false);
  const [errorRestore, setErrorRestore] = useState(false);

  return (
    <>
      {loading ? (
        <>
          <Loader state={loading} text={'loading..'} stateEdit={setLoading} />
        </>
      ) : (
        <Modal
          animationType="slide"
          transparent={true}
          visible={state}
          onRequestClose={() => {
            stateEdit(false);
          }}>
          <View style={ModalPassStyle.containerModalWarning}>
            <View style={ModalPassStyle.containerView}>
              {errorRestore ? (
                <>
                <Text style={ModalPassStyle.textWarning}>
                  {' '}
                  {'  '}
                  Error to restore password, <Text style={ModalPassStyle.textErrorRestore}>
                  try again later...
                  </Text>{' '}
                 
                </Text>
                 <Pressable
                 style={ModalPassStyle.pressableGoBackError}
                 onPress={() => {
                   stateEdit('');
                   setErrorRestore(false)
                 }}>
                 <Text style={ModalPassStyle.textPressableGoBackError}>
                  {' '}
                  Go back
                 </Text>
               </Pressable>
               </>
              ) : (
                <>
                <Text style={ModalPassStyle.textWarning}>
                  {' '}
                  {'  '}
                  Are you sure <Text style={ModalPassStyle.textAd}>
                    change
                  </Text>{' '}
                  your password ?
                </Text>
                <View style={ModalPassStyle.containerPressables}>
                <Pressable
                  style={ModalPassStyle.pressableDeleteAccount}
                  onPress={() => {
                    setLoading(true);
                    setTimeout(() => {
                      restorePassword(email)
                        .then(() => {
                          console.log('Send restore');
                          logout();
                        })
                        .catch(err => {
                          console.log(`Eror restore ${err}`);
                          setErrorRestore(true);
                        });
                    }, 600);
                  }}>
                  <Text style={ModalPassStyle.textPressableDeleteAccount}>
                    <Icon
                      name={'checkmark-circle-outline'}
                      size={15}
                      color={'#047C74'}
                    />{' '}
                    Yes, continue
                  </Text>
                </Pressable>
                <Pressable
                  style={ModalPassStyle.pressableGoBack}
                  onPress={() => {
                    stateEdit('');
                    setErrorRestore(false)
                  }}>
                  <Text style={ModalPassStyle.textPressableGoBack}>
                    <Icon
                      name={'refresh-circle-outline'}
                      size={17}
                      color={'#3140C2'}
                    />{' '}
                    Not, go back
                  </Text>
                </Pressable>
              </View>
              </>
              )}
              
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default ModalRestorePassword;
