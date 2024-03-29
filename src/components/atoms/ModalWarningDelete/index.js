import {Text, View, Modal, Pressable} from 'react-native';
import ModalWarningDeleteStyle from './ModalWarningDeleteStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {deleteAccount} from '../../../auth/authFirestore';
import Loader from '../Loader';
import {accountStore} from '../../../utils/account';
import {useUser} from '../../../utils/user';

const ModalWarningDelete = props => {
  const uID = useUser(state => state.user.uid);
  const state = accountStore(state => state.deleteAccount);
  const stateEdit = accountStore(state => state.setDeleteAccount);
  const loading = accountStore(state => state.loading);
  const setLoading = accountStore(state => state.setLoading);
  return (
    <>
      {loading ? (
        <>
          <Loader state={loading} text={'loading..'} stateEdit={setLoading} />
        </>
      ) : (
        <Modal
          animationType="fade"
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
                Are you sure{' '}
                <Text style={ModalWarningDeleteStyle.textAd}>delete</Text> your
                account ?
              </Text>
              <View style={ModalWarningDeleteStyle.containerPressables}>
                <Pressable
                  style={ModalWarningDeleteStyle.pressableDeleteAccount}
                  onPress={() => {
                    setLoading(true);
                    setTimeout(() => {
                      deleteAccount(uID);
                    }, 600);
                    stateEdit(false);
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
