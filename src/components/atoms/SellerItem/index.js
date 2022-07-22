import React, {useState} from 'react';
import {View, Text, Pressable, Image, Modal} from 'react-native';
import IconButton from '../IconButtom';
import SellerItemStyles from './SellerItemStyles';
import {deleteProduct} from '../../../auth/authFirestore';

const SellerItem = props => {
  const {name, price, condition, description, id, navigation, category, stock} =
    props;
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <Pressable
      style={SellerItemStyles.container}
      delayLongPress={1000}
      activeOpacity={0.6}>
      <View>
        <Image
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg?v=1611727768&width=1024',
          }}
          style={SellerItemStyles.image}
        />
      </View>
      <View style={SellerItemStyles.content}>
        <Text style={SellerItemStyles.title}>{name}</Text>
        <Text>{description}</Text>
        <Text style={SellerItemStyles.price}>${price}</Text>
        <Text style={SellerItemStyles.condition}>{condition}</Text>
      </View>
      <View style={{marginTop: 10}}>
        <IconButton
          name="edit"
          onPress={() => {
            navigation.navigate('Products', {
              documentId: id,
              name: name,
              price: price,
              condition: condition,
              description: description,
              category: category,
              stock: stock,
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
              onPress={() => {
                deleteProduct('Products', id);
                setModalVisible(!isModalVisible);
              }}
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
