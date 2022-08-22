import React, {useState} from 'react';
import {View, Text, Pressable, Image, Modal} from 'react-native';
import IconButton from '../IconButtom';
import SellerItemStyles from './SellerItemStyles';
import {deleteDocumentByUid} from '../../../auth/cloudFirestore';
import {money} from '../../../utils/format';
const SellerItem = ({
  name,
  price,
  condition,
  description,
  id,
  uidUser,
  like,
  navigation,
  category,
  stock,
  image,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const DeleteDocument = async () => {
    try {
      await deleteDocumentByUid('Products', id);
      setModalVisible(!isModalVisible);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Pressable
      style={SellerItemStyles.container}
      delayLongPress={1000}
      activeOpacity={0.6}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={SellerItemStyles.image}
        />
      </View>
      <View style={SellerItemStyles.content}>
        <Text style={SellerItemStyles.title}>{name}</Text>
        <Text style={SellerItemStyles.description}>{description}</Text>
        <Text style={SellerItemStyles.price}>{money(price)}</Text>
        <Text style={SellerItemStyles.condition}>{condition}</Text>
      </View>
      <View style={{marginTop: 10}}>
        <IconButton
          name="edit"
          onPress={() => {
            navigation.navigate('Products', {
              id,
              uidUser,
              like,
              name,
              price,
              condition,
              description,
              category,
              stock,
              image,
              oldImage: image,
            });
          }}
          color="#50B838"
          size={30}
        />
        <IconButton
          name="trash"
          onPress={() => {
            setModalVisible(!isModalVisible);
          }}
          color="#C15050"
          size={30}
        />
      </View>
      <Modal animationType="fade" visible={isModalVisible} transparent>
        <View style={SellerItemStyles.modalStyle}>
          <View style={SellerItemStyles.headerModal}>
            <Text style={SellerItemStyles.text}>
              Are you sure you want to remove {name} ?
            </Text>
          </View>
          <View style={SellerItemStyles.contentModal}>
            <IconButton
              name="check"
              onPress={DeleteDocument}
              color="#50B838"
              size={40}
            />
            <IconButton
              name="close"
              onPress={() => {
                setModalVisible(!isModalVisible);
              }}
              color="#C15050"
              size={40}
            />
          </View>
        </View>
      </Modal>
    </Pressable>
  );
};

export default SellerItem;
