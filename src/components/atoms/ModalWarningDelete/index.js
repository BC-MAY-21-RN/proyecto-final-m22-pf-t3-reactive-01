import React, {useState} from 'react';
import {Text, View, Modal, Pressable} from 'react-native';
import ModalWarningDeleteStyle from './ModalWarningDeleteStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {deleteAccount} from '../../../auth/authFirestore';
import Loader from '../Loader';

const ModalWarningDelete = props => {
  const {state, stateEdit, uID} = props;
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <>
          <Loader state={loading} text={'loading..'} stateEdit={setLoading}/>
        </>
      ) : (
        <Modal
          animationType="slide"
          transparent={true}
          visible={state}
          onRequestClose={() => {
            stateEdit(false);
          }}>
          <View style={ModalWarningDeleteStyle.containerModalWarning}>
            <View style={ModalWarningDeleteStyle.containerView}>
              <Text style={ModalWarningDeleteStyle.textWarning}>
                {' '}
                {'  '}
                Are you sure <Text style={ModalWarningDeleteStyle.textAd}>delete</Text> your account ?
              </Text>
              <View style={ModalWarningDeleteStyle.containerPressables}>
                <Pressable
                  style={ModalWarningDeleteStyle.pressableDeleteAccount}
                  onPress={() => {
                    setLoading(true)
                    setTimeout(()=>{ deleteAccount(uID)},3998)
                    
                    
                   
                  }}>
                  <Text
                    style={ModalWarningDeleteStyle.textPressableDeleteAccount}>
                    <Icon
                      name={'close-circle-outline'}
                      size={15}
                      color={'#D40C1C'}
                    />{' '}
                    Yes, delete
                  </Text>
                </Pressable>
                <Pressable
                  style={ModalWarningDeleteStyle.pressableGoBack}
                  onPress={() => {
                    stateEdit(false);
                    
                  }}>
                  <Text style={ModalWarningDeleteStyle.textPressableGoBack}>
                    <Icon
                      name={'refresh-circle-outline'}
                      size={17}
                      color={'#3140C2'}
                    />{' '}
                    Not, go back
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default ModalWarningDelete;
