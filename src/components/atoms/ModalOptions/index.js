import React from 'react';
import {Pressable, Modal, StyleSheet} from 'react-native';
import CustomButton from '../Form/CustomButton';
const useModalOptions = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const MVisible = boolean => setModalVisible(!modalVisible);
  const ModalOptions = ({Options}) => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <Pressable
          style={styles.centeredView}
          onPress={() => setModalVisible(!modalVisible)}>
          <Pressable style={styles.modalView} onPress={() => {}}>
            {Options.map((item, index) => (
              <CustomButton
                key={index}
                title={item.title}
                iconName={item.iconName}
                iconSize={17}
                styleIcon={styles.icon}
                style={styles.button}
                styleText={styles.txt}
                onPress={item.onPress}
              />
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    );
  };
  return {MVisible, ModalOptions};
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '100%',
    marginTop: 0,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
  },
  txt: {fontSize: 16},
  icon: {marginLeft: 10, marginRight: 10},
});

export default useModalOptions;
